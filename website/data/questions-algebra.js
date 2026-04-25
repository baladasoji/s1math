const WS_QUESTIONS = [

  // ── Part 1: Sequences — Patterns & Next Term (18 questions: 14 MCQ, 4 fill) ──

  { id: 'a01', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'What is the next term in the sequence 3, 7, 11, 15, …?',
    options: ['17', '18', '19', '20'], correct: 2,
    explanation: 'The common difference is 4. 15 + 4 = 19.' },

  { id: 'a02', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'What is the common difference in the sequence 5, 10, 15, 20, …?',
    options: ['2', '5', '10', '15'], correct: 1,
    explanation: 'Each term increases by 5, so the common difference is 5.' },

  { id: 'a03', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'A pictorial sequence has 1, 4, 7, 10 dots in successive patterns. How many dots are in the 5th pattern?',
    options: ['11', '12', '13', '14'], correct: 2,
    explanation: 'The common difference is 3. Pattern 5: 10 + 3 = 13.' },

  { id: 'a04', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'What is the next term in the sequence 2, 5, 8, 11, …?',
    options: ['12', '13', '14', '15'], correct: 2,
    explanation: 'Common difference is 3. 11 + 3 = 14.' },

  { id: 'a05', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'Which best describes an arithmetic sequence?',
    options: ['Terms are multiplied by a constant each time', 'A constant is added to each term to get the next', 'A sequence of square numbers', 'A sequence of prime numbers'], correct: 1,
    explanation: 'An arithmetic sequence has a fixed common difference — a constant value added each time.' },

  { id: 'a06', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'The sequence 20, 17, 14, 11, … is arithmetic. What is the next term?',
    options: ['6', '7', '8', '9'], correct: 2,
    explanation: 'Common difference is −3. 11 − 3 = 8.' },

  { id: 'a07', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'A sequence starts at 6 with a common difference of 7. What is the 4th term?',
    options: ['24', '26', '27', '28'], correct: 2,
    explanation: '6, 13, 20, 27. The 4th term is 27.' },

  { id: 'a08', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'Which sequence has a common difference of −4?',
    options: ['1, 5, 9, 13', '10, 6, 2, −2', '3, 7, 11, 15', '2, 4, 8, 16'], correct: 1,
    explanation: '10, 6, 2, −2: each term decreases by 4, so the common difference is −4.' },

  { id: 'a09', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'A pictorial sequence shows squares in rows: row 1 has 2, row 2 has 4, row 3 has 6. How many squares are in row 5?',
    options: ['8', '9', '10', '12'], correct: 2,
    explanation: 'Common difference is 2. Row 5: 6 + 2 + 2 = 10.' },

  { id: 'a10', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'What is the common difference in the sequence 100, 93, 86, 79, …?',
    options: ['−5', '−6', '−7', '−8'], correct: 2,
    explanation: '93 − 100 = −7. Each term decreases by 7.' },

  { id: 'a11', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'Which is NOT an arithmetic sequence?',
    options: ['1, 3, 5, 7', '1, 4, 9, 16', '10, 15, 20, 25', '−3, 0, 3, 6'], correct: 1,
    explanation: '1, 4, 9, 16 are square numbers — the differences (3, 5, 7) are not constant, so it is not arithmetic.' },

  { id: 'a12', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'A sequence has first term 1 and common difference 9. What is the 3rd term?',
    options: ['18', '19', '20', '21'], correct: 1,
    explanation: '1, 10, 19. The 3rd term is 19.' },

  { id: 'a13', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'In a pictorial pattern, Pattern 1 uses 3 sticks, Pattern 2 uses 5, Pattern 3 uses 7. How many sticks does Pattern 4 need?',
    options: ['8', '9', '10', '11'], correct: 1,
    explanation: 'Common difference is 2. Pattern 4: 7 + 2 = 9 sticks.' },

  { id: 'a14', part: 'Part 1: Sequences — Patterns & Next Term', type: 'mcq',
    text: 'In the sequence …, ?, 31, 37, 43, … what is the missing term before 31?',
    options: ['23', '24', '25', '26'], correct: 2,
    explanation: 'Common difference is 6. The term before 31 is 31 − 6 = 25.' },

  { id: 'a15', part: 'Part 1: Sequences — Patterns & Next Term', type: 'fill',
    text: 'Write the next two terms of the sequence 4, 9, 14, 19, __, __ (write as two numbers separated by a comma, e.g. 5,10)',
    answer: ['24,29', '24, 29'], explanation: 'Common difference is 5. 19 + 5 = 24, 24 + 5 = 29.' },

  { id: 'a16', part: 'Part 1: Sequences — Patterns & Next Term', type: 'fill',
    text: 'What is the common difference of the sequence 8, 3, −2, −7, …?',
    answer: ['-5', '−5'], explanation: '3 − 8 = −5. Each term decreases by 5.' },

  { id: 'a17', part: 'Part 1: Sequences — Patterns & Next Term', type: 'fill',
    text: 'A sequence starts at 12 with common difference 6. Write the 5th term.',
    answer: ['36'], explanation: '12, 18, 24, 30, 36. The 5th term is 36.' },

  { id: 'a18', part: 'Part 1: Sequences — Patterns & Next Term', type: 'fill',
    text: 'Pattern 1 has 5 tiles, Pattern 2 has 8 tiles, Pattern 3 has 11 tiles. How many tiles does Pattern 6 have?',
    answer: ['20'], explanation: 'Common difference is 3. Pattern 6: 5 + 5×3 = 20.' },

  // ── Part 2: Sequences — nth Term (22 questions: 18 MCQ, 4 fill) ──

  { id: 'a19', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'What is the nth term formula for the sequence 3, 5, 7, 9, …?',
    options: ['T(n) = n + 2', 'T(n) = 2n + 1', 'T(n) = 3n − 1', 'T(n) = 2n + 3'], correct: 1,
    explanation: 'Common difference = 2, so T(n) = 2n + c. T(1) = 3: 2(1) + c = 3, so c = 1. T(n) = 2n + 1.' },

  { id: 'a20', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'Using T(n) = 4n − 1, what is T(5)?',
    options: ['17', '18', '19', '20'], correct: 2,
    explanation: 'T(5) = 4(5) − 1 = 20 − 1 = 19.' },

  { id: 'a21', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'The sequence 5, 8, 11, 14, … has nth term T(n) = 3n + 2. What is T(10)?',
    options: ['30', '32', '34', '35'], correct: 1,
    explanation: 'T(10) = 3(10) + 2 = 32.' },

  { id: 'a22', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'Which nth term formula produces the sequence 6, 11, 16, 21, …?',
    options: ['T(n) = 5n + 1', 'T(n) = 5n − 1', 'T(n) = 6n', 'T(n) = 4n + 2'], correct: 0,
    explanation: 'Common difference = 5. T(1) = 6: 5(1) + c = 6, c = 1. T(n) = 5n + 1.' },

  { id: 'a23', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'Using T(n) = 7n − 4, what is T(1)?',
    options: ['1', '2', '3', '4'], correct: 2,
    explanation: 'T(1) = 7(1) − 4 = 3.' },

  { id: 'a24', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'A sequence has T(n) = 2n + 5. What is the 4th term?',
    options: ['11', '12', '13', '14'], correct: 2,
    explanation: 'T(4) = 2(4) + 5 = 13.' },

  { id: 'a25', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'The nth term of a sequence is T(n) = 10 − 3n. What is T(3)?',
    options: ['−1', '0', '1', '2'], correct: 2,
    explanation: 'T(3) = 10 − 3(3) = 10 − 9 = 1.' },

  { id: 'a26', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'What is the nth term formula for 1, 4, 7, 10, …?',
    options: ['T(n) = 3n − 2', 'T(n) = 3n − 1', 'T(n) = 3n + 1', 'T(n) = n + 3'], correct: 0,
    explanation: 'Common difference = 3. T(1) = 1: 3(1) + c = 1, c = −2. T(n) = 3n − 2.' },

  { id: 'a27', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'For T(n) = 6n + 2, which value of n gives T(n) = 50?',
    options: ['n = 7', 'n = 8', 'n = 9', 'n = 10'], correct: 1,
    explanation: '6n + 2 = 50 → 6n = 48 → n = 8.' },

  { id: 'a28', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'What is the 100th term of the sequence with T(n) = 2n − 1?',
    options: ['197', '198', '199', '200'], correct: 2,
    explanation: 'T(100) = 2(100) − 1 = 199.' },

  { id: 'a29', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'The sequence 20, 18, 16, 14, … has common difference −2. What is its nth term?',
    options: ['T(n) = 22 − 2n', 'T(n) = 20 − 2n', 'T(n) = 2n + 20', 'T(n) = −2n + 18'], correct: 0,
    explanation: 'T(n) = 20 + (n−1)(−2) = 22 − 2n.' },

  { id: 'a30', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'Using T(n) = 3n + 4, for which value of n does T(n) = 31?',
    options: ['7', '8', '9', '10'], correct: 2,
    explanation: '3n + 4 = 31 → 3n = 27 → n = 9.' },

  { id: 'a31', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'Which sequence is described by T(n) = n + 5?',
    options: ['5, 6, 7, 8', '6, 7, 8, 9', '5, 10, 15, 20', '1, 6, 11, 16'], correct: 1,
    explanation: 'T(1) = 6, T(2) = 7, T(3) = 8, T(4) = 9.' },

  { id: 'a32', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'A sequence starts at 4 with common difference 5. Using T(n) = a + (n−1)d, what is T(6)?',
    options: ['27', '28', '29', '30'], correct: 2,
    explanation: 'T(6) = 4 + 5×5 = 4 + 25 = 29.' },

  { id: 'a33', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'For the sequence 12, 9, 6, 3, …, what is T(5)?',
    options: ['−3', '0', '1', '2'], correct: 1,
    explanation: 'Common difference = −3. T(5) = 12 + 4×(−3) = 0.' },

  { id: 'a34', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'T(n) = 5n − 3. Which statement is true?',
    options: ['The sequence decreases', 'The first term is 5', 'The common difference is 5', 'The 2nd term is 6'], correct: 2,
    explanation: 'In T(n) = dn + c, the coefficient of n is the common difference. Here d = 5.' },

  { id: 'a35', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'The 1st term of a sequence is 7 and the common difference is 4. What is T(n)?',
    options: ['T(n) = 4n + 3', 'T(n) = 4n + 7', 'T(n) = 7n + 4', 'T(n) = 4n − 3'], correct: 0,
    explanation: 'T(n) = 7 + (n−1)×4 = 4n + 3.' },

  { id: 'a36', part: 'Part 2: Sequences — nth Term', type: 'mcq',
    text: 'Is 100 a term in the sequence with T(n) = 3n − 2?',
    options: ['Yes, it is the 33rd term', 'Yes, it is the 34th term', 'No, because 3n = 102 gives a non-integer', 'Yes, it is the 32nd term'], correct: 1,
    explanation: '3n − 2 = 100 → 3n = 102 → n = 34. T(34) = 100. Yes, it is the 34th term.' },

  { id: 'a37', part: 'Part 2: Sequences — nth Term', type: 'fill',
    text: 'The nth term of a sequence is T(n) = 4n + 1. Calculate T(7).',
    answer: ['29'], explanation: 'T(7) = 4(7) + 1 = 29.' },

  { id: 'a38', part: 'Part 2: Sequences — nth Term', type: 'fill',
    text: 'Write the nth term formula for the sequence 2, 7, 12, 17, … in the form T(n) = an + b.',
    answer: ['T(n) = 5n - 3', 'T(n) = 5n − 3', '5n - 3', '5n − 3'], explanation: 'Common difference = 5. T(1) = 2: 5 + c = 2, c = −3. T(n) = 5n − 3.' },

  { id: 'a39', part: 'Part 2: Sequences — nth Term', type: 'fill',
    text: 'Using T(n) = 8n − 5, find the value of n when T(n) = 43.',
    answer: ['6'], explanation: '8n − 5 = 43 → 8n = 48 → n = 6.' },

  { id: 'a40', part: 'Part 2: Sequences — nth Term', type: 'fill',
    text: 'A sequence has first term 3 and common difference 8. What is T(9)?',
    answer: ['67'], explanation: 'T(9) = 3 + 8×8 = 67.' },

  // ── Part 3: Tables of Values (16 questions: 13 MCQ, 3 fill) ──

  { id: 'a41', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'T(n) = 2n + 3. What is T(1)?',
    options: ['4', '5', '6', '7'], correct: 1,
    explanation: 'T(1) = 2(1) + 3 = 5.' },

  { id: 'a42', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'T(n) = 3n − 1. What is the output when n = 4?',
    options: ['9', '10', '11', '12'], correct: 2,
    explanation: 'T(4) = 3(4) − 1 = 11.' },

  { id: 'a43', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'A table shows: n = 1 → 7, n = 2 → 10, n = 3 → 13. What is T(5)?',
    options: ['17', '18', '19', '20'], correct: 2,
    explanation: 'Common difference = 3. T(5) = 7 + 4×3 = 19.' },

  { id: 'a44', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'T(n) = 5n + 2. Which row in the table is incorrect?',
    options: ['n = 1, T = 7', 'n = 2, T = 12', 'n = 3, T = 17', 'n = 4, T = 23'], correct: 3,
    explanation: 'T(4) = 5(4) + 2 = 22, not 23.' },

  { id: 'a45', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'A table for an arithmetic sequence shows T(3) = 11 and T(4) = 14. What is T(6)?',
    options: ['18', '20', '22', '24'], correct: 1,
    explanation: 'Common difference = 3. T(5) = 17, T(6) = 20.' },

  { id: 'a46', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'T(n) = n + 6. What is the value of n when T(n) = 14?',
    options: ['6', '7', '8', '9'], correct: 2,
    explanation: 'n + 6 = 14 → n = 8.' },

  { id: 'a47', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'T(n) = 4n − 3. Which pair of values is correct?',
    options: ['n = 2, T = 5', 'n = 3, T = 9', 'n = 4, T = 13', 'n = 5, T = 17'], correct: 2,
    explanation: 'T(4) = 4(4) − 3 = 13. ✓' },

  { id: 'a48', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'A sequence table shows the points (1, 4), (2, 7), (3, 10). What are the coordinates of the 4th point?',
    options: ['(4, 12)', '(4, 13)', '(4, 14)', '(4, 15)'], correct: 1,
    explanation: 'Common difference = 3. T(4) = 10 + 3 = 13. Coordinates: (4, 13).' },

  { id: 'a49', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'For T(n) = 6n + 1, what is the common difference between consecutive T values?',
    options: ['1', '6', '7', '61'], correct: 1,
    explanation: 'The coefficient of n gives the common difference. Here d = 6.' },

  { id: 'a50', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'T(n) = 10 − 2n. What is T(4)?',
    options: ['0', '2', '3', '4'], correct: 1,
    explanation: 'T(4) = 10 − 8 = 2.' },

  { id: 'a51', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'A table shows n = 1 → 3, n = 2 → 5, n = 3 → 7. Which nth term formula matches?',
    options: ['T(n) = 2n + 1', 'T(n) = n + 2', 'T(n) = 3n', 'T(n) = 2n − 1'], correct: 0,
    explanation: 'Common difference = 2. T(1) = 3: 2 + c = 3, c = 1. T(n) = 2n + 1.' },

  { id: 'a52', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'When plotting (n, T(n)) for an arithmetic sequence, the points lie on:',
    options: ['A curve', 'A straight line', 'A circle', 'A zigzag'], correct: 1,
    explanation: 'Arithmetic sequences have a constant difference, so the points (n, T(n)) lie on a straight line.' },

  { id: 'a53', part: 'Part 3: Tables of Values', type: 'mcq',
    text: 'T(n) = 3n + 5. What is T(0)?',
    options: ['3', '4', '5', '6'], correct: 2,
    explanation: 'T(0) = 3(0) + 5 = 5.' },

  { id: 'a54', part: 'Part 3: Tables of Values', type: 'fill',
    text: 'T(n) = 7n − 2. Calculate T(5).',
    answer: ['33'], explanation: 'T(5) = 35 − 2 = 33.' },

  { id: 'a55', part: 'Part 3: Tables of Values', type: 'fill',
    text: 'A table shows T(2) = 9 and the common difference is 4. What is T(5)?',
    answer: ['21'], explanation: 'T(3) = 13, T(4) = 17, T(5) = 21.' },

  { id: 'a56', part: 'Part 3: Tables of Values', type: 'fill',
    text: 'T(n) = 2n + 4. For which value of n does T(n) = 20?',
    answer: ['8'], explanation: '2n = 16 → n = 8.' },

  // ── Part 4: Expressions — Collecting Like Terms (20 questions: 16 MCQ, 4 fill) ──

  { id: 'a57', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: a + a + a',
    options: ['a³', '3a', '3 + a', 'a + 3'], correct: 1,
    explanation: 'a + a + a = 3a.' },

  { id: 'a58', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 4x + 3x',
    options: ['7', '7x', '12x', '4x³'], correct: 1,
    explanation: '4x + 3x = (4 + 3)x = 7x.' },

  { id: 'a59', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 5b − 2b',
    options: ['3', '3b', '2b', '7b'], correct: 1,
    explanation: '5b − 2b = 3b.' },

  { id: 'a60', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 3x + 2y + x + 4y',
    options: ['4x + 6y', '6x + 4y', '9xy', '10x'], correct: 0,
    explanation: 'x terms: 3x + x = 4x. y terms: 2y + 4y = 6y. Answer: 4x + 6y.' },

  { id: 'a61', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Which pair of terms are like terms?',
    options: ['3x and 3y', '4a and 4b', '5x and 2x', '6 and 6a'], correct: 2,
    explanation: 'Like terms share the same variable. 5x and 2x both contain x.' },

  { id: 'a62', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 7m + 3 − 2m + 5',
    options: ['5m + 8', '9m + 8', '5m − 2', '5m + 2'], correct: 0,
    explanation: '7m − 2m = 5m; 3 + 5 = 8. Answer: 5m + 8.' },

  { id: 'a63', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 6p + 4q − 3p − q',
    options: ['3p + 3q', '9p + 5q', '3p + 5q', '3p − 3q'], correct: 0,
    explanation: '6p − 3p = 3p; 4q − q = 3q. Answer: 3p + 3q.' },

  { id: 'a64', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Which expression cannot be simplified further?',
    options: ['3x + 2x', '4a + 4b', '5y + y', '6z − z'], correct: 1,
    explanation: '4a and 4b are unlike terms (different variables) and cannot be combined.' },

  { id: 'a65', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 10 − 3t + 2t − 4',
    options: ['t + 6', '−t + 6', '5t + 6', '−t − 6'], correct: 1,
    explanation: '−3t + 2t = −t; 10 − 4 = 6. Answer: −t + 6.' },

  { id: 'a66', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 2a + 3b + 5a − b + 4',
    options: ['7a + 2b + 4', '10ab + 4', '7a + 4b + 4', '7a − 2b + 4'], correct: 0,
    explanation: '2a + 5a = 7a; 3b − b = 2b; constant = 4. Answer: 7a + 2b + 4.' },

  { id: 'a67', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'What is the coefficient of x in: 3x + 7 − x?',
    options: ['1', '2', '3', '4'], correct: 1,
    explanation: '3x − x = 2x. Coefficient of x is 2.' },

  { id: 'a68', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: x + x + x + x + x',
    options: ['x⁵', '5x', '5 + x', '5'], correct: 1,
    explanation: 'Five copies of x: x + x + x + x + x = 5x.' },

  { id: 'a69', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 4n + 8 − n − 3',
    options: ['3n + 5', '3n + 11', '5n + 5', '3n − 5'], correct: 0,
    explanation: '4n − n = 3n; 8 − 3 = 5. Answer: 3n + 5.' },

  { id: 'a70', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'A student writes 3x + 2 + x = 3x². Is this correct?',
    options: ['Yes', 'No — it should be 4x + 2', 'No — it should be 6x', 'No — it should be 4x²'], correct: 1,
    explanation: '3x + x = 4x; the constant 2 stays. Correct answer: 4x + 2.' },

  { id: 'a71', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 9c − 4c + c',
    options: ['4c', '5c', '6c', '14c'], correct: 2,
    explanation: '(9 − 4 + 1)c = 6c.' },

  { id: 'a72', part: 'Part 4: Expressions — Collecting Like Terms', type: 'mcq',
    text: 'Simplify: 3x + 4 + 2x − 1 + x',
    options: ['5x + 3', '6x + 3', '6x + 5', '5x + 5'], correct: 1,
    explanation: '3x + 2x + x = 6x; 4 − 1 = 3. Answer: 6x + 3.' },

  { id: 'a73', part: 'Part 4: Expressions — Collecting Like Terms', type: 'fill',
    text: 'Simplify: 8y − 3y',
    answer: ['5y'], explanation: '8y − 3y = 5y.' },

  { id: 'a74', part: 'Part 4: Expressions — Collecting Like Terms', type: 'fill',
    text: 'Simplify: 4a + 2b + 3a − b (write in the form pa + qb)',
    answer: ['7a + b', '7a+b'], explanation: '4a + 3a = 7a; 2b − b = b. Answer: 7a + b.' },

  { id: 'a75', part: 'Part 4: Expressions — Collecting Like Terms', type: 'fill',
    text: 'What is the coefficient of t in: 6t − 2 + 3t?',
    answer: ['9'], explanation: '6t + 3t = 9t. Coefficient is 9.' },

  { id: 'a76', part: 'Part 4: Expressions — Collecting Like Terms', type: 'fill',
    text: 'Simplify: 5x + 3 − 2x + 7',
    answer: ['3x + 10'], explanation: '5x − 2x = 3x; 3 + 7 = 10. Answer: 3x + 10.' },

  // ── Part 5: Linear Equations (24 questions: 19 MCQ, 5 fill) ──

  { id: 'a77', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: x + 5 = 12',
    options: ['x = 5', 'x = 7', 'x = 17', 'x = 60'], correct: 1,
    explanation: 'x = 12 − 5 = 7.' },

  { id: 'a78', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 3x = 18',
    options: ['x = 3', 'x = 5', 'x = 6', 'x = 15'], correct: 2,
    explanation: 'x = 18 ÷ 3 = 6.' },

  { id: 'a79', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 2x + 4 = 14',
    options: ['x = 4', 'x = 5', 'x = 7', 'x = 9'], correct: 1,
    explanation: '2x = 10; x = 5.' },

  { id: 'a80', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 5x − 3 = 22',
    options: ['x = 4', 'x = 5', 'x = 6', 'x = 7'], correct: 1,
    explanation: '5x = 25; x = 5.' },

  { id: 'a81', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 4x + 1 = 2x + 9',
    options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'], correct: 1,
    explanation: '2x = 8; x = 4.' },

  { id: 'a82', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 3x − 2 = x + 8',
    options: ['x = 4', 'x = 5', 'x = 6', 'x = 7'], correct: 1,
    explanation: '2x = 10; x = 5.' },

  { id: 'a83', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 7x + 3 = 4x + 12',
    options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'], correct: 1,
    explanation: '3x = 9; x = 3.' },

  { id: 'a84', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: x ÷ 3 = 5',
    options: ['x = 2', 'x = 8', 'x = 15', 'x = 53'], correct: 2,
    explanation: 'Multiply both sides by 3: x = 15.' },

  { id: 'a85', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 10 − 2x = 4',
    options: ['x = 2', 'x = 3', 'x = 4', 'x = 7'], correct: 1,
    explanation: '2x = 6; x = 3.' },

  { id: 'a86', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 6x − 4 = 3x + 11',
    options: ['x = 4', 'x = 5', 'x = 6', 'x = 7'], correct: 1,
    explanation: '3x = 15; x = 5.' },

  { id: 'a87', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Which value satisfies 2x + 7 = 15?',
    options: ['x = 3', 'x = 4', 'x = 5', 'x = 11'], correct: 1,
    explanation: '2x = 8; x = 4.' },

  { id: 'a88', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 5x + 6 = 2x + 15',
    options: ['x = 2', 'x = 3', 'x = 4', 'x = 7'], correct: 1,
    explanation: '3x = 9; x = 3.' },

  { id: 'a89', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'A student says the solution to 4x − 8 = 12 is x = 1. Is this correct?',
    options: ['Yes', 'No — x = 4', 'No — x = 5', 'No — x = 6'], correct: 2,
    explanation: '4x = 20; x = 5.' },

  { id: 'a90', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 9x = 63',
    options: ['x = 6', 'x = 7', 'x = 8', 'x = 9'], correct: 1,
    explanation: 'x = 63 ÷ 9 = 7.' },

  { id: 'a91', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 8x + 4 = 5x + 16',
    options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'], correct: 1,
    explanation: '3x = 12; x = 4.' },

  { id: 'a92', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 12 − x = 5',
    options: ['x = 5', 'x = 6', 'x = 7', 'x = 17'], correct: 2,
    explanation: 'x = 12 − 5 = 7.' },

  { id: 'a93', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 4x + 3 = 3x + 10',
    options: ['x = 5', 'x = 6', 'x = 7', 'x = 8'], correct: 2,
    explanation: 'x = 10 − 3 = 7.' },

  { id: 'a94', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 10x − 15 = 5x',
    options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'], correct: 1,
    explanation: '5x = 15; x = 3.' },

  { id: 'a95', part: 'Part 5: Linear Equations', type: 'mcq',
    text: 'Solve: 2x − 6 = x + 1',
    options: ['x = 5', 'x = 6', 'x = 7', 'x = 8'], correct: 2,
    explanation: 'x = 1 + 6 = 7.' },

  { id: 'a96', part: 'Part 5: Linear Equations', type: 'fill',
    text: 'Solve: 6x − 2 = 28',
    answer: ['5'], explanation: '6x = 30; x = 5.' },

  { id: 'a97', part: 'Part 5: Linear Equations', type: 'fill',
    text: 'Solve: 5x + 2 = 3x + 10',
    answer: ['4'], explanation: '2x = 8; x = 4.' },

  { id: 'a98', part: 'Part 5: Linear Equations', type: 'fill',
    text: 'Solve: 9 − 2x = 1',
    answer: ['4'], explanation: '2x = 8; x = 4.' },

  { id: 'a99', part: 'Part 5: Linear Equations', type: 'fill',
    text: 'A number doubled and then increased by 7 equals 21. Find the number.',
    answer: ['7'], explanation: '2x + 7 = 21; 2x = 14; x = 7.' },

  { id: 'a100', part: 'Part 5: Linear Equations', type: 'fill',
    text: 'Solve: 7x − 4 = 4x + 14',
    answer: ['6'], explanation: '3x = 18; x = 6.' },

];
