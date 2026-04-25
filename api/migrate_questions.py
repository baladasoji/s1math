#!/usr/bin/env python3
"""
Migrate questions from local JS data files into DynamoDB.

Usage:
    python3 api/migrate_questions.py [--table TABLE_NAME] [--region REGION] [--dry-run]

Reads website/exercises/data/questions-{topic}.js for each topic and
batch-writes every question to DynamoDB. The JS files are the source of truth;
each question already contains all DynamoDB fields (topic, questionId, grade,
subtopic, partOrder, difficulty, etc.).

Run once after deploying the SAM stack. Safe to re-run — PutItem overwrites.
"""

import argparse
import json
import os
import sys
import boto3

TOPICS = {
    'numbers':    'website/exercises/data/questions-numbers.js',
    'algebra':    'website/exercises/data/questions-algebra.js',
    'geometry':   'website/exercises/data/questions-geometry.js',
    'set-theory': 'website/exercises/data/questions-set-theory.js',
}

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def load_questions(js_path: str) -> list:
    """Evaluate the JS file with Node.js and return the WS_QUESTIONS array as Python objects."""
    import subprocess
    node_script = f"""
const fs = require('fs');
const code = fs.readFileSync('{js_path}', 'utf8') + '\\nmodule.exports = WS_QUESTIONS;';
process.stdout.write(JSON.stringify(eval(code)));
"""
    result = subprocess.run(['node', '-e', node_script], capture_output=True, text=True, check=True)
    return json.loads(result.stdout)


def migrate(table_name: str, region: str, dry_run: bool = False):
    table = None
    if not dry_run:
        dynamodb = boto3.resource('dynamodb', region_name=region)
        table    = dynamodb.Table(table_name)

    total = 0
    for topic, rel_path in TOPICS.items():
        abs_path = os.path.join(REPO_ROOT, rel_path)
        if not os.path.exists(abs_path):
            print(f'  SKIP  {topic} — file not found: {abs_path}')
            continue

        questions = load_questions(abs_path)
        print(f'  {topic}: {len(questions)} questions loaded', end='')

        if dry_run:
            print(' (dry-run, not writing)')
            total += len(questions)
            continue

        # Batch write in chunks of 25 (DynamoDB limit)
        with table.batch_writer() as batch:
            for q in questions:
                batch.put_item(Item=q)

        print(f' → written')
        total += len(questions)

    print(f'\nDone. {total} questions {"would be " if dry_run else ""}written to {table_name}.')


def main():
    parser = argparse.ArgumentParser(description='Migrate S1 Math questions to DynamoDB')
    parser.add_argument('--table',    default='s1math-questions', help='DynamoDB table name')
    parser.add_argument('--region',   default='eu-west-1',        help='AWS region')
    parser.add_argument('--dry-run',  action='store_true',        help='Parse files but do not write to DynamoDB')
    args = parser.parse_args()

    print(f'Migrating to table "{args.table}" in {args.region}')
    if args.dry_run:
        print('DRY RUN — no writes will be made\n')

    migrate(args.table, args.region, dry_run=args.dry_run)


if __name__ == '__main__':
    main()
