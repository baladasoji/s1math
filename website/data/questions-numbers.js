/* ══════════════════════════════════════════════════════════
   NUMBERS — 100 QUESTIONS  (S1 syllabus scope only)
   Parts:  1 Natural Numbers & Integers          (18)
           2 Integers & Number Line              (14)
           3 Fractions & Decimals                (18)
           4 Operations & Order (BODMAS)         (14)
           5 Primes, Factors, Divisibility       (20)
           6 Real-World Applications             (16)
   Mix:  80 MCQ, 20 fill-in
   ══════════════════════════════════════════════════════════ */
const WS_QUESTIONS = [

    // ── Part 1: Natural Numbers & Integers (18 Qs — 15 MCQ, 3 fill) ──
    {
        id:'q01', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which number set does <strong>−7</strong> belong to?',
        options:['Natural Numbers (ℕ)','Whole Numbers (W)','Integers (ℤ)','Irrational Numbers'],
        correct:2,
        explanation:'−7 is negative, so it cannot be natural or whole. It belongs to the Integers (ℤ).'
    },
    {
        id:'q02', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which of these is <strong>NOT</strong> an integer?',
        options:['−5','0','1/2','12'],
        correct:2,
        explanation:'Integers are whole numbers and their negatives: …, −2, −1, 0, 1, 2, … Fractions like 1/2 are not integers.'
    },
    {
        id:'q03', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Is <strong>−3</strong> a natural number?',
        options:['Yes — all integers are natural','No — natural numbers are positive counting numbers only','Yes — negative numbers are natural','Only if it is even'],
        correct:1,
        explanation:'Natural numbers are {1, 2, 3, …}. They are always positive. −3 is an integer but not a natural number.'
    },
    {
        id:'q04', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which of these is a <strong>Natural Number</strong>?',
        options:['−3','0','1/2','7'],
        correct:3,
        explanation:'Natural numbers are the positive counting numbers 1, 2, 3, … Only 7 qualifies here.'
    },
    {
        id:'q05', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'True or False: Every <strong>natural number</strong> is also an <strong>integer</strong>.',
        options:['True','False'],
        correct:0,
        explanation:'True — natural numbers {1, 2, 3, …} are a subset of integers {…, −2, −1, 0, 1, 2, …}.'
    },
    {
        id:'q06', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which set contains <strong>0</strong> but the other does not?',
        options:['Integers, not natural numbers','Natural numbers, not integers','Both contain 0','Neither contains 0'],
        correct:0,
        explanation:'Integers include 0 (and negatives). Natural numbers start at 1 and do not include 0.'
    },
    {
        id:'q07', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which of these integers is the <strong>smallest</strong>?',
        options:['−3','−10','2','0'],
        correct:1,
        explanation:'On the number line, −10 is furthest to the left. The further left, the smaller the value.'
    },
    {
        id:'q08', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'How many <strong>natural numbers</strong> are less than 5?',
        options:['3','4','5','6'],
        correct:1,
        explanation:'Natural numbers less than 5 are: 1, 2, 3, 4 — that is 4 numbers.'
    },
    {
        id:'q09', part:'Part 1: Natural Numbers & Integers', type:'fill',
        text:'Name the set of numbers: {…, −3, −2, −1, 0, 1, 2, 3, …} (one word)',
        answer:['integers','integer'],
        explanation:'The set of all positive whole numbers, their negatives, and zero is called the Integers (ℤ).'
    },
    {
        id:'q10', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'True or False: <strong>−7</strong> is an integer but not a natural number.',
        options:['True','False'],
        correct:0,
        explanation:'True — integers include all negatives. Natural numbers are positive only, so −7 is an integer but not natural.'
    },
    {
        id:'q10b', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which of the following lists contains <strong>only integers</strong>?',
        options:['−5, 0, 3, 1/2','−4, −1, 0, 6','0.5, 1, 2, 3','π, 0, 1, 2'],
        correct:1,
        explanation:'−4, −1, 0, and 6 are all whole numbers or their negatives — every one is an integer.'
    },
    {
        id:'q10c', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which integer comes immediately <strong>after</strong> −5 on the number line?',
        options:['−6','−4','4','5'],
        correct:1,
        explanation:'Moving one step right from −5 gives −4.'
    },
    {
        id:'q10d', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which statement is true about the number <strong>0</strong>?',
        options:['It is a natural number','It is a positive integer','It is an integer but not a natural number','It is neither an integer nor a natural number'],
        correct:2,
        explanation:'0 is an integer (ℤ) but not a natural number (ℕ starts at 1).'
    },
    {
        id:'q10e', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'How many <strong>integers</strong> satisfy −3 ≤ n ≤ 3?',
        options:['5','6','7','8'],
        correct:2,
        explanation:'The integers are: −3, −2, −1, 0, 1, 2, 3 — that is 7 integers.'
    },
    {
        id:'q10f', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which of these is true?',
        options:['All integers are natural numbers','All natural numbers are integers','Natural numbers include negative numbers','Integers do not include 0'],
        correct:1,
        explanation:'Natural numbers {1, 2, 3, …} are a subset of integers {…, −1, 0, 1, 2, …}, so all natural numbers are integers.'
    },
    {
        id:'q10g', part:'Part 1: Natural Numbers & Integers', type:'mcq',
        text:'Which number is an integer but <strong>NOT</strong> a natural number?',
        options:['5','12','0','100'],
        correct:2,
        explanation:'0 is an integer but not a natural number. Natural numbers start at 1.'
    },
    {
        id:'q10h', part:'Part 1: Natural Numbers & Integers', type:'fill',
        text:'List all natural numbers less than 4, in order.',
        answer:['1,2,3','1, 2, 3'],
        explanation:'Natural numbers less than 4: 1, 2, 3.'
    },
    {
        id:'q10i', part:'Part 1: Natural Numbers & Integers', type:'fill',
        text:'How many integers are strictly between −4 and 2 (not including −4 and 2)?',
        answer:['5'],
        explanation:'Integers between −4 and 2: −3, −2, −1, 0, 1 — that is 5 integers.'
    },

    // ── Part 2: Integers & Number Line (14 Qs — 11 MCQ, 3 fill) ──
    {
        id:'q11', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'What is the <strong>absolute value</strong> of −9? (i.e. |−9|)',
        options:['−9','0','9','81'],
        correct:2,
        explanation:'|−9| = 9. Absolute value is the distance from 0 on the number line — always non-negative.'
    },
    {
        id:'q12', part:'Part 2: Integers & Number Line', type:'fill',
        text:'Calculate: |−15| − |6|  (write as a whole number)',
        answer:['9'],
        explanation:'|−15| = 15, |6| = 6. So 15 − 6 = 9.'
    },
    {
        id:'q13', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'Which list of integers is in <strong>ascending order</strong> (smallest to largest)?',
        options:['−1, −4, 0, 3','−4, −1, 0, 3','3, 0, −1, −4','0, −1, −4, 3'],
        correct:1,
        explanation:'On the number line: −4 &lt; −1 &lt; 0 &lt; 3.'
    },
    {
        id:'q14', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'Which comparison is <strong>correct</strong>?',
        options:['−3 &gt; −1','−5 &lt; −8','0 &lt; −2','−2 &gt; −7'],
        correct:3,
        explanation:'−2 is to the right of −7 on the number line, so −2 &gt; −7.'
    },
    {
        id:'q15', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'The <strong>transitivity</strong> property: if −3 &gt; −8 and −8 &gt; −10, what can we conclude?',
        options:['−8 &gt; −3','−3 &gt; −10','−10 &gt; −3','Nothing'],
        correct:1,
        explanation:'Transitivity: if a &gt; b and b &gt; c, then a &gt; c. So −3 &gt; −8 &gt; −10 means −3 &gt; −10.'
    },
    {
        id:'q16', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'A point is plotted at coordinates <strong>(−3, 2)</strong>. Which description is correct?',
        options:['3 right, 2 up','3 left, 2 up','3 left, 2 down','3 right, 2 down'],
        correct:1,
        explanation:'The x-coordinate −3 means 3 steps left; the y-coordinate 2 means 2 steps up from the origin.'
    },
    {
        id:'q17', part:'Part 2: Integers & Number Line', type:'fill',
        text:'A submarine is at −120 m. It rises 45 m. What is its new depth in metres? (include the minus sign if negative)',
        answer:['-75','−75','-75 m','−75 m'],
        explanation:'−120 + 45 = −75 m.'
    },
    {
        id:'q17b', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'Which point is <strong>closest to 0</strong> on the number line?',
        options:['−8','5','−3','7'],
        correct:2,
        explanation:'Distance from 0: |−8|=8, |5|=5, |−3|=3, |7|=7. The closest is −3 (distance 3).'
    },
    {
        id:'q17c', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'What is |−12|?',
        options:['−12','0','12','144'],
        correct:2,
        explanation:'Absolute value is always non-negative. |−12| = 12.'
    },
    {
        id:'q17d', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'Which coordinate pair is in the <strong>second quadrant</strong> (x negative, y positive)?',
        options:['(3, 4)','(−2, 5)','(−1, −3)','(4, −2)'],
        correct:1,
        explanation:'The second quadrant has x &lt; 0 and y &gt; 0. (−2, 5) satisfies this.'
    },
    {
        id:'q17e', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'If a &lt; b and b &lt; c, which statement must be true?',
        options:['a &gt; c','b &gt; c','a &lt; c','c &lt; a'],
        correct:2,
        explanation:'This is the transitivity of &lt;: if a &lt; b and b &lt; c, then a &lt; c.'
    },
    {
        id:'q17f', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'Which integer has an absolute value of 6?',
        options:['Only 6','Only −6','Both 6 and −6','Neither'],
        correct:2,
        explanation:'Both 6 and −6 are distance 6 from 0, so |6| = |−6| = 6.'
    },
    {
        id:'q17g', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'Point A is at (2, −3). What are the coordinates of the point <strong>3 units directly above</strong> A?',
        options:['(5, −3)','(2, 0)','(2, −6)','(−1, −3)'],
        correct:1,
        explanation:'Moving 3 units up means adding 3 to the y-coordinate: (2, −3 + 3) = (2, 0).'
    },
    {
        id:'q17h', part:'Part 2: Integers & Number Line', type:'mcq',
        text:'Which list is in <strong>descending order</strong> (largest to smallest)?',
        options:['−5, −2, 0, 4','4, 0, −2, −5','−5, 0, −2, 4','0, 4, −2, −5'],
        correct:1,
        explanation:'Descending order: 4 &gt; 0 &gt; −2 &gt; −5.'
    },
    {
        id:'q17i', part:'Part 2: Integers & Number Line', type:'fill',
        text:'Calculate: |7| + |−4| (write as a whole number)',
        answer:['11'],
        explanation:'|7| = 7 and |−4| = 4. 7 + 4 = 11.'
    },

    // ── Part 3: Fractions & Decimals (18 Qs — 14 MCQ, 4 fill) ──
    {
        id:'q18', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Calculate: <strong>1/2 + 1/4</strong>',
        options:['2/6','1/3','3/4','2/4'],
        correct:2,
        explanation:'Common denominator 4: 2/4 + 1/4 = 3/4.'
    },
    {
        id:'q19', part:'Part 3: Fractions & Decimals', type:'fill',
        text:'Calculate: <strong>3/4 − 1/8</strong>  (give your answer as a fraction, e.g. 5/8)',
        answer:['5/8'],
        explanation:'3/4 = 6/8, so 6/8 − 1/8 = 5/8.'
    },
    {
        id:'q20', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Calculate: <strong>2/3 × 3/4</strong>',
        options:['5/7','6/7','5/12','1/2'],
        correct:3,
        explanation:'(2×3)/(3×4) = 6/12 = 1/2.'
    },
    {
        id:'q21', part:'Part 3: Fractions & Decimals', type:'fill',
        text:'Calculate: <strong>1/2 ÷ 1/4</strong>  (whole number or fraction)',
        answer:['2','2/1'],
        explanation:'Dividing by a fraction = multiplying by its reciprocal: 1/2 × 4/1 = 2.'
    },
    {
        id:'q22', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Simplify: <strong>12/18</strong>',
        options:['4/6','3/4','2/3','6/9'],
        correct:2,
        explanation:'GCD(12, 18) = 6. Dividing both by 6 gives 2/3.'
    },
    {
        id:'q23', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Convert <strong>3/4</strong> to a decimal.',
        options:['0.25','0.5','0.75','0.8'],
        correct:2,
        explanation:'3 ÷ 4 = 0.75.'
    },
    {
        id:'q24', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Convert <strong>0.6</strong> to a fraction in its lowest terms.',
        options:['6/10','3/5','2/3','3/4'],
        correct:1,
        explanation:'0.6 = 6/10. GCD(6,10) = 2, so 6/10 = 3/5.'
    },
    {
        id:'q25', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Convert mixed number <strong>2¾</strong> to an improper fraction.',
        options:['7/4','8/4','11/4','9/4'],
        correct:2,
        explanation:'2¾ = (2×4 + 3)/4 = 11/4.'
    },
    {
        id:'q26', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Calculate: <strong>5/6 + 2/3</strong>',
        options:['7/9','7/6','3/2','5/9'],
        correct:2,
        explanation:'Common denominator 6: 5/6 + 4/6 = 9/6 = 3/2.'
    },
    {
        id:'q27', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Which fraction is the <strong>largest</strong>?',
        options:['2/3','3/5','5/8','7/12'],
        correct:0,
        explanation:'As decimals: 2/3 ≈ 0.667, 3/5 = 0.6, 5/8 = 0.625, 7/12 ≈ 0.583. So 2/3 is largest.'
    },
    {
        id:'q27b', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Which of the following fractions is equivalent to <strong>2/5</strong>?',
        options:['4/8','4/10','3/6','6/12'],
        correct:1,
        explanation:'2/5 × 2/2 = 4/10. Equivalent fractions are created by multiplying numerator and denominator by the same number.'
    },
    {
        id:'q27c', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Convert <strong>1/8</strong> to a decimal.',
        options:['0.8','0.18','0.125','0.25'],
        correct:2,
        explanation:'1 ÷ 8 = 0.125.'
    },
    {
        id:'q27d', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Which decimal is equivalent to <strong>7/10</strong>?',
        options:['0.07','0.7','7.0','0.007'],
        correct:1,
        explanation:'7/10 means 7 tenths = 0.7.'
    },
    {
        id:'q27e', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Arrange in ascending order: <strong>0.5, 3/8, 2/5</strong>',
        options:['0.5, 3/8, 2/5','3/8, 2/5, 0.5','2/5, 3/8, 0.5','3/8, 0.5, 2/5'],
        correct:1,
        explanation:'3/8=0.375, 2/5=0.4, 0.5. Ascending: 3/8 &lt; 2/5 &lt; 0.5.'
    },
    {
        id:'q27f', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Simplify <strong>20/24</strong> to its lowest terms.',
        options:['4/5','5/6','10/12','2/3'],
        correct:1,
        explanation:'GCD(20, 24) = 4. 20÷4 = 5, 24÷4 = 6. Simplified: 5/6.'
    },
    {
        id:'q27g', part:'Part 3: Fractions & Decimals', type:'mcq',
        text:'Calculate: <strong>3/5 + 1/10</strong>',
        options:['4/15','4/10','7/10','4/5'],
        correct:2,
        explanation:'Common denominator 10: 6/10 + 1/10 = 7/10.'
    },
    {
        id:'q27h', part:'Part 3: Fractions & Decimals', type:'fill',
        text:'Convert <strong>0.375</strong> to a fraction in its lowest terms (write as a/b).',
        answer:['3/8'],
        explanation:'0.375 = 375/1000. GCD(375, 1000) = 125. 375÷125 = 3, 1000÷125 = 8. Answer: 3/8.'
    },
    {
        id:'q27i', part:'Part 3: Fractions & Decimals', type:'fill',
        text:'Calculate: <strong>4/5 − 3/10</strong>  (write as a fraction in lowest terms)',
        answer:['1/2'],
        explanation:'Common denominator 10: 8/10 − 3/10 = 5/10 = 1/2.'
    },

    // ── Part 4: Operations & Order of Operations (14 Qs — 11 MCQ, 3 fill) ──
    {
        id:'q28', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>3 + 4 × 2</strong>',
        options:['14','11','10','24'],
        correct:1,
        explanation:'BODMAS: multiplication before addition. 4 × 2 = 8, then 3 + 8 = 11.'
    },
    {
        id:'q29', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>(3 + 4) × 2</strong>',
        options:['14','11','10','24'],
        correct:0,
        explanation:'Brackets first: (3 + 4) = 7, then 7 × 2 = 14.'
    },
    {
        id:'q30', part:'Part 4: Operations & Order of Operations', type:'fill',
        text:'Calculate: <strong>20 − 3 × 4 + 1</strong>',
        answer:['9'],
        explanation:'Multiplication first: 3 × 4 = 12. Then left to right: 20 − 12 + 1 = 9.'
    },
    {
        id:'q31', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>−6 + 10</strong>',
        options:['−16','4','16','−4'],
        correct:1,
        explanation:'Start at −6 and move 10 steps right: −6 + 10 = 4.'
    },
    {
        id:'q32', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>−3 − (−5)</strong>',
        options:['−8','−2','2','8'],
        correct:2,
        explanation:'Subtracting a negative is the same as adding: −3 − (−5) = −3 + 5 = 2.'
    },
    {
        id:'q33', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>−4 × (−3)</strong>',
        options:['−12','12','7','−7'],
        correct:1,
        explanation:'Negative × negative = positive: (−4) × (−3) = 12.'
    },
    {
        id:'q34', part:'Part 4: Operations & Order of Operations', type:'fill',
        text:'Calculate: <strong>2 + 3 × (8 − 5)</strong>',
        answer:['11'],
        explanation:'Brackets first: 8 − 5 = 3. Multiply: 3 × 3 = 9. Add: 2 + 9 = 11.'
    },
    {
        id:'q34b', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'What does BODMAS stand for? Select the correct order.',
        options:['Brackets, Order, Division, Multiplication, Addition, Subtraction','Brackets, Order, Decimals, Multiplication, Addition, Subtraction','Brackets, Operators, Division, Minus, Addition, Squares','Brackets, Objects, Division, Multiplication, Addition, Subtraction'],
        correct:0,
        explanation:'BODMAS: Brackets, Order (powers/roots), Division, Multiplication, Addition, Subtraction.'
    },
    {
        id:'q34c', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>10 ÷ 2 + 3</strong>',
        options:['4','8','10','16'],
        correct:1,
        explanation:'Division before addition: 10 ÷ 2 = 5, then 5 + 3 = 8.'
    },
    {
        id:'q34d', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>−8 ÷ (−2)</strong>',
        options:['−4','4','16','−16'],
        correct:1,
        explanation:'Negative ÷ negative = positive: (−8) ÷ (−2) = 4.'
    },
    {
        id:'q34e', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>6 − 2 × 3 + 4</strong>',
        options:['16','8','4','12'],
        correct:2,
        explanation:'Multiplication first: 2 × 3 = 6. Then left to right: 6 − 6 + 4 = 4.'
    },
    {
        id:'q34f', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>3 × (−2) + 10</strong>',
        options:['−16','4','16','−4'],
        correct:1,
        explanation:'Multiplication first: 3 × (−2) = −6. Then −6 + 10 = 4.'
    },
    {
        id:'q34g', part:'Part 4: Operations & Order of Operations', type:'mcq',
        text:'Calculate: <strong>−3 × 4 − (−6)</strong>',
        options:['−18','−6','6','18'],
        correct:1,
        explanation:'Multiplication first: −3 × 4 = −12. Subtracting a negative: −12 − (−6) = −12 + 6 = −6.'
    },
    {
        id:'q34h', part:'Part 4: Operations & Order of Operations', type:'fill',
        text:'Calculate: <strong>4 + (10 − 3) × 2</strong>',
        answer:['18'],
        explanation:'Brackets first: 10 − 3 = 7. Multiply: 7 × 2 = 14. Add: 4 + 14 = 18.'
    },

    // ── Part 5: Primes, Factors, Divisibility, HCF & LCM (20 Qs — 16 MCQ, 4 fill) ──
    {
        id:'q35', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'Which of these numbers is <strong>prime</strong>?',
        options:['9','12','15','13'],
        correct:3,
        explanation:'13 is only divisible by 1 and 13. Others: 9=3², 12=4×3, 15=3×5.'
    },
    {
        id:'q36', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'Is <strong>51</strong> a prime number?',
        options:['Yes','No — it equals 3 × 17','No — it equals 7 × 7','No — it is even'],
        correct:1,
        explanation:'51 = 3 × 17, so it has factors other than 1 and itself. It is composite.'
    },
    {
        id:'q37', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'What is the prime factorisation of <strong>12</strong>?',
        options:['2×6','2²×3','3×4','2×3²'],
        correct:1,
        explanation:'12 = 2 × 2 × 3 = 2² × 3.'
    },
    {
        id:'q38', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'fill',
        text:'What is the <strong>HCF</strong> of 12 and 18?',
        answer:['6'],
        explanation:'Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. HCF = 6.'
    },
    {
        id:'q39', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'What is the <strong>LCM</strong> of 4 and 6?',
        options:['24','2','12','6'],
        correct:2,
        explanation:'Multiples of 4: 4,8,12,… Multiples of 6: 6,12,… LCM = 12.'
    },
    {
        id:'q40', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'Which rule correctly describes divisibility by <strong>2</strong>?',
        options:['The sum of digits is even','The last digit is even','The number ends in 2','The number is divisible by 4'],
        correct:1,
        explanation:'A number is divisible by 2 if its last digit is 0, 2, 4, 6, or 8.'
    },
    {
        id:'q41', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'Which of these numbers is divisible by <strong>5</strong>?',
        options:['42','63','85','91'],
        correct:2,
        explanation:'A number is divisible by 5 if its last digit is 0 or 5. 85 ends in 5.'
    },
    {
        id:'q42', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'A number is divisible by <strong>3</strong> if…',
        options:['its last digit is 3','the sum of its digits is divisible by 3','it is divisible by 9','it is even'],
        correct:1,
        explanation:'Divisibility rule for 3: add all digits. If divisible by 3, so is the number. E.g. 123 → 1+2+3=6 ✓.'
    },
    {
        id:'q43', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'Which of these is divisible by <strong>10</strong>?',
        options:['105','150','205','315'],
        correct:1,
        explanation:'A number is divisible by 10 if and only if its last digit is 0. Only 150 qualifies.'
    },
    {
        id:'q44', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'How many prime numbers are there between 1 and 20?',
        options:['6','7','8','5'],
        correct:2,
        explanation:'Primes: 2, 3, 5, 7, 11, 13, 17, 19 — 8 primes.'
    },
    {
        id:'q45', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'fill',
        text:'What is the <strong>LCM</strong> of 3 and 5?',
        answer:['15'],
        explanation:'3 and 5 share no common factors other than 1, so LCM = 3 × 5 = 15.'
    },
    {
        id:'q45b', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'What is the prime factorisation of <strong>30</strong>?',
        options:['2×15','5×6','2×3×5','3×10'],
        correct:2,
        explanation:'30 = 2 × 15 = 2 × 3 × 5. All factors must be prime.'
    },
    {
        id:'q45c', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'What is the HCF of 20 and 30?',
        options:['5','10','15','60'],
        correct:1,
        explanation:'Factors of 20: 1,2,4,5,10,20. Factors of 30: 1,2,3,5,6,10,15,30. HCF = 10.'
    },
    {
        id:'q45d', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'Is <strong>1</strong> a prime number?',
        options:['Yes — it is only divisible by 1','No — prime numbers must have exactly two factors','Yes — it is odd','No — it is too small'],
        correct:1,
        explanation:'A prime number has exactly two factors: 1 and itself. The number 1 has only one factor, so it is not prime.'
    },
    {
        id:'q45e', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'Is 348 divisible by <strong>3</strong>?',
        options:['Yes, because 3+4+8=15 which is divisible by 3','No, because it is even','Yes, because it ends in 8','No, because 348 is not in the 3 times table'],
        correct:0,
        explanation:'Sum of digits: 3+4+8 = 15. 15 ÷ 3 = 5 ✓. So 348 is divisible by 3.'
    },
    {
        id:'q45f', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'What is the LCM of 6 and 8?',
        options:['2','14','24','48'],
        correct:2,
        explanation:'Multiples of 6: 6,12,18,24,… Multiples of 8: 8,16,24,… LCM = 24.'
    },
    {
        id:'q45g', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'What is the prime factorisation of <strong>36</strong>?',
        options:['4×9','2²×9','2²×3²','6×6'],
        correct:2,
        explanation:'36 = 4 × 9 = 2² × 3².'
    },
    {
        id:'q45h', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'fill',
        text:'What is the HCF of 24 and 36?',
        answer:['12'],
        explanation:'24 = 2³×3, 36 = 2²×3². HCF = 2²×3 = 12.'
    },
    {
        id:'q45i', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'fill',
        text:'List all the factors of 18.',
        answer:['1,2,3,6,9,18','1, 2, 3, 6, 9, 18'],
        explanation:'18 = 1×18 = 2×9 = 3×6. Factors: 1, 2, 3, 6, 9, 18.'
    },
    {
        id:'q45j', part:'Part 5: Primes, Factors, Divisibility, HCF & LCM', type:'mcq',
        text:'Which of these numbers is divisible by both <strong>2 and 3</strong>?',
        options:['14','21','42','25'],
        correct:2,
        explanation:'42 is even (÷2 ✓) and 4+2=6 is divisible by 3 (÷3 ✓).'
    },

    // ── Part 6: Real-World Applications (16 Qs — 13 MCQ, 3 fill) ──
    {
        id:'q46', part:'Part 6: Real-World Applications', type:'fill',
        text:'Temperature was −8°C and rose by <strong>12°C</strong>. What is the new temperature in °C?',
        answer:['4','4°C'],
        explanation:'−8 + 12 = 4°C.'
    },
    {
        id:'q60', part:'Part 6: Real-World Applications', type:'fill',
        text:'A market stall sells apples in bags of 6 and oranges in bags of 8. What is the smallest equal number of apples and oranges you can buy (using whole bags of each)?',
        answer:['24'],
        explanation:'LCM(6, 8) = 24. You need 4 bags of apples and 3 bags of oranges to get 24 of each.'
    },
    {
        id:'q61', part:'Part 6: Real-World Applications', type:'fill',
        text:'Sam owes £15 and then borrows another £8. Write his balance as an integer in £.',
        answer:['-23','−23','-£23','−£23','-23 pounds'],
        explanation:'Owing £15 is −15. −15 − 8 = −23.'
    },
    {
        id:'q62', part:'Part 6: Real-World Applications', type:'mcq',
        text:'A lift is on floor −2 (basement 2). It goes up 5 floors. Which floor does it reach?',
        options:['Floor −7','Floor 3','Floor −3','Floor 7'],
        correct:1,
        explanation:'−2 + 5 = 3.'
    },
    {
        id:'q63', part:'Part 6: Real-World Applications', type:'mcq',
        text:'Two runners meet every LCM(4, 6) minutes. They start together. After how many minutes do they next meet?',
        options:['2 minutes','10 minutes','12 minutes','24 minutes'],
        correct:2,
        explanation:'LCM(4, 6) = 12. They next meet after 12 minutes.'
    },
    {
        id:'q64', part:'Part 6: Real-World Applications', type:'mcq',
        text:'A point is plotted at (−2, 4). What is the <strong>absolute value</strong> of its x-coordinate?',
        options:['−2','2','4','8'],
        correct:1,
        explanation:'|−2| = 2.'
    },
    {
        id:'q65', part:'Part 6: Real-World Applications', type:'mcq',
        text:'The temperature at midnight is −5°C. By noon it has risen 9°C. What is the noon temperature?',
        options:['−14°C','−4°C','4°C','14°C'],
        correct:2,
        explanation:'−5 + 9 = 4°C.'
    },
    {
        id:'q66', part:'Part 6: Real-World Applications', type:'mcq',
        text:'A diver is at −24 m. She descends another 6 m. What is her new depth?',
        options:['−18 m','−30 m','18 m','30 m'],
        correct:1,
        explanation:'Descending means subtracting: −24 − 6 = −30 m.'
    },
    {
        id:'q67', part:'Part 6: Real-World Applications', type:'mcq',
        text:'A shop buys items in packs of 4 or packs of 6. What is the smallest number of items they can buy using whole packs of both sizes?',
        options:['2','10','12','24'],
        correct:2,
        explanation:'LCM(4, 6) = 12. They need to buy 12 items (3 packs of 4 or 2 packs of 6).'
    },
    {
        id:'q68', part:'Part 6: Real-World Applications', type:'mcq',
        text:'A recipe needs 3/4 cup of flour. If you double the recipe, how much flour do you need?',
        options:['1/2 cup','3/2 cups','6/8 cups','3/8 cups'],
        correct:1,
        explanation:'3/4 × 2 = 6/4 = 3/2 cups.'
    },
    {
        id:'q69', part:'Part 6: Real-World Applications', type:'mcq',
        text:'Two friends share a pizza equally. One friend is not hungry and gives their half to the other. What fraction of the pizza does the recipient now have?',
        options:['1/4','1/2','3/4','1'],
        correct:3,
        explanation:'The recipient already has 1/2 and receives another 1/2. 1/2 + 1/2 = 2/2 = 1 whole pizza.'
    },
    {
        id:'q70', part:'Part 6: Real-World Applications', type:'mcq',
        text:'A class has 30 students. 2/5 are girls. How many girls are there?',
        options:['10','12','15','18'],
        correct:1,
        explanation:'2/5 × 30 = 60/5 = 12 girls.'
    },
    {
        id:'q71', part:'Part 6: Real-World Applications', type:'mcq',
        text:'A bank account has a balance of −£45. After depositing £60, what is the new balance?',
        options:['−£105','−£15','£15','£105'],
        correct:2,
        explanation:'−45 + 60 = £15.'
    },
    {
        id:'q72', part:'Part 6: Real-World Applications', type:'mcq',
        text:'Two buses leave a station at the same time. Bus A comes every 8 minutes, Bus B every 12 minutes. After how many minutes will they leave together again?',
        options:['4 minutes','16 minutes','20 minutes','24 minutes'],
        correct:3,
        explanation:'LCM(8, 12) = 24 minutes.'
    },
    {
        id:'q73', part:'Part 6: Real-World Applications', type:'mcq',
        text:'A rope is 7/8 m long. Another piece is 3/8 m long. What is their total length?',
        options:['4/8 m','10/16 m','10/8 m = 1¼ m','4/16 m'],
        correct:2,
        explanation:'7/8 + 3/8 = 10/8 = 5/4 = 1¼ m.'
    },
    {
        id:'q74', part:'Part 6: Real-World Applications', type:'mcq',
        text:'A number multiplied by −3 gives −18. What is the number?',
        options:['−6','6','−54','54'],
        correct:1,
        explanation:'n × (−3) = −18 → n = −18 ÷ (−3) = 6.'
    },

];
