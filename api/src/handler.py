import json
import os
import boto3
from boto3.dynamodb.conditions import Key

ALLOWED_TOPICS = {'numbers', 'algebra', 'geometry', 'set-theory'}

dynamodb = boto3.resource('dynamodb')
table    = dynamodb.Table(os.environ['TABLE_NAME'])


def lambda_handler(event, context):
    topic = event.get('pathParameters', {}).get('topic', '')

    if topic not in ALLOWED_TOPICS:
        return _response(400, {'error': f"Unknown topic '{topic}'. Valid topics: {sorted(ALLOWED_TOPICS)}"})

    result = table.query(
        KeyConditionExpression=Key('topic').eq(topic),
        ScanIndexForward=True,   # sort by questionId ascending
    )

    questions = result.get('Items', [])

    # DynamoDB returns Decimal for numbers; convert to int/float for JSON
    questions = [_fix_types(q) for q in questions]

    return _response(200, questions)


def _response(status_code, body):
    return {
        'statusCode': status_code,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        'body': json.dumps(body),
    }


def _fix_types(obj):
    """Recursively convert Decimal → int/float so json.dumps works."""
    from decimal import Decimal
    if isinstance(obj, dict):
        return {k: _fix_types(v) for k, v in obj.items()}
    if isinstance(obj, list):
        return [_fix_types(v) for v in obj]
    if isinstance(obj, Decimal):
        return int(obj) if obj % 1 == 0 else float(obj)
    return obj
