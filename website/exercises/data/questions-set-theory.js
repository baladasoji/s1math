const WS_QUESTIONS = [

  // ── Part 1: Sets & Elements (24 questions: 19 MCQ, 5 fill) ──

  { id: 's01', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'Which symbol means "is an element of"?',
    options: ['&#8834;', '&#8746;', '&#8712;', '&#8745;'], correct: 2,
    explanation: '∈ means "is an element of". For example, 3 ∈ {1, 2, 3}.' },

  { id: 's02', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'Let A = {2, 4, 6, 8}. Which statement is true?',
    options: ['5 &#8712; A', '3 &#8712; A', '6 &#8712; A', '7 &#8712; A'], correct: 2,
    explanation: '6 is listed in set A, so 6 ∈ A.' },

  { id: 's03', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'Let B = {a, e, i, o, u}. Which statement is true?',
    options: ['b &#8712; B', 'a &#8713; B', 'u &#8712; B', 'y &#8712; B'], correct: 2,
    explanation: 'u is a vowel listed in B, so u ∈ B.' },

  { id: 's04', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'The empty set contains:',
    options: ['The number 0', 'One element', 'No elements', 'Infinitely many elements'], correct: 2,
    explanation: 'The empty set (∅ or {}) contains no elements at all.' },

  { id: 's05', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'The empty set is written as:',
    options: ['{0}', '&#8709; or {}', '{&#8709;}', '{1, 2, 3, …}'], correct: 1,
    explanation: 'The empty set is written as ∅ or {}. Note: {∅} is a set containing the empty set, which is not empty.' },

  { id: 's06', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'The universal set ξ contains:',
    options: ['Only even numbers', 'Only the elements being considered in the problem', 'All real numbers', 'No elements'], correct: 1,
    explanation: 'The universal set ξ is the set of all elements under consideration in a given problem.' },

  { id: 's07', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'Let ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}. How many elements does ξ have?',
    options: ['9', '10', '11', '12'], correct: 1,
    explanation: 'Counting from 1 to 10, ξ has 10 elements.' },

  { id: 's08', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'C = {red, blue, green}. How many elements does C have?',
    options: ['2', '3', '4', '5'], correct: 1,
    explanation: 'C has three elements: red, blue, and green.' },

  { id: 's09', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'Which of these is a valid way to write a set?',
    options: ['(1, 2, 3)', '[1, 2, 3]', '{1, 2, 3}', '1, 2, 3'], correct: 2,
    explanation: 'Sets are written using curly braces: {1, 2, 3}.' },

  { id: 's10', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'Which symbol means "is NOT an element of"?',
    options: ['&#8712;', '&#8713;', '&#8834;', '&#8746;'], correct: 1,
    explanation: '∉ means "is not an element of". For example, 5 ∉ {1, 2, 3}.' },

  { id: 's11', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'D = {3, 6, 9, 12, 15}. Is 10 ∈ D?',
    options: ['Yes', 'No', 'It depends', 'Cannot tell'], correct: 1,
    explanation: '10 is not listed in D, so 10 ∉ D.' },

  { id: 's12', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'How many elements does the empty set have?',
    options: ['0', '1', '∞', 'Unknown'], correct: 0,
    explanation: 'The empty set has zero elements by definition.' },

  { id: 's13', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'E = {vowels in the word MATHEMATICS}. List E.',
    options: ['{A, E, I}', '{A, E, I, O, U}', '{A, I}', '{A, A, E, A, I, I}'], correct: 0,
    explanation: 'MATHEMATICS contains the vowels A, E, A, I, A, I. A set lists distinct elements: E = {A, E, I}.' },

  { id: 's14', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'Sets are collections where:',
    options: ['Order matters', 'Duplicates are counted separately', 'Each element is distinct (listed once)', 'All elements must be numbers'], correct: 2,
    explanation: 'In a set, each element is distinct (unique). Order does not matter and duplicates are not listed.' },

  { id: 's15', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'Are {1, 2, 3} and {3, 1, 2} the same set?',
    options: ['No — the order is different', 'Yes — sets do not depend on order', 'Only if all elements are numbers', 'No — they are different sets'], correct: 1,
    explanation: 'Sets are equal if they contain the same elements, regardless of order.' },

  { id: 's16', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'F = {even numbers between 1 and 10}. Which list correctly represents F?',
    options: ['{1, 3, 5, 7, 9}', '{2, 4, 6, 8}', '{2, 4, 6, 8, 10}', '{0, 2, 4, 6, 8, 10}'], correct: 1,
    explanation: 'Even numbers strictly between 1 and 10 (not including 1 and 10) are 2, 4, 6, 8.' },

  { id: 's17', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'G = {letters in the word CAT}. Which statement is true?',
    options: ['G has 4 elements', 'T &#8713; G', 'A &#8712; G', 'B &#8712; G'], correct: 2,
    explanation: 'G = {C, A, T}. A is one of the letters, so A ∈ G.' },

  { id: 's18', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'Which of the following statements is true?',
    options: ['4 &#8713; {1, 3, 5}', '3 &#8713; {1, 2, 3}', 'a &#8713; {a, b, c}', '10 &#8713; {5, 10, 15}'], correct: 0,
    explanation: '4 is not in {1, 3, 5}, so 4 ∉ {1, 3, 5} is true. The other options are false: 3 ∈ {1,2,3}, a ∈ {a,b,c}, and 10 ∈ {5,10,15}.' },

  { id: 's19', part: 'Part 1: Sets & Elements', type: 'mcq',
    text: 'H = {1, 2, 3, 4, 5}. Which element is NOT in H?',
    options: ['1', '3', '5', '6'], correct: 3,
    explanation: '6 is not listed in H, so 6 ∉ H.' },

  { id: 's20', part: 'Part 1: Sets & Elements', type: 'fill',
    text: 'Write the set of odd numbers from 1 to 9 using set notation.',
    answer: ['{1,3,5,7,9}', '{1, 3, 5, 7, 9}'], explanation: 'Odd numbers from 1 to 9 are 1, 3, 5, 7, 9.' },

  { id: 's21', part: 'Part 1: Sets & Elements', type: 'fill',
    text: 'A = {4, 8, 12, 16}. How many elements does A have?',
    answer: ['4'], explanation: 'Counting: 4, 8, 12, 16 — four elements.' },

  { id: 's22', part: 'Part 1: Sets & Elements', type: 'fill',
    text: 'Write the symbol that means "is an element of".',
    answer: ['∈', '&isin;'], explanation: '∈ means "is an element of".' },

  { id: 's23', part: 'Part 1: Sets & Elements', type: 'fill',
    text: 'B = {letters in the word LEVEL}. Write set B (each letter once).',
    answer: ['{L,E,V}', '{L, E, V}', '{E,L,V}', '{E, L, V}', '{V,E,L}', '{V, E, L}'], explanation: 'LEVEL has letters L, E, V, E, L. Distinct letters: {L, E, V}.' },

  { id: 's24', part: 'Part 1: Sets & Elements', type: 'fill',
    text: 'The set with no elements is called the ______ set.',
    answer: ['empty', 'empty set'], explanation: 'The set with no elements is called the empty set, written ∅ or {}.' },

  // ── Part 2: Subsets & ⊂ (22 questions: 18 MCQ, 4 fill) ──

  { id: 's25', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'Which symbol means "is a subset of"?',
    options: ['&#8712;', '&#8745;', '&#8834;', '&#8746;'], correct: 2,
    explanation: '⊂ means "is a subset of". A ⊂ B means every element of A is also in B.' },

  { id: 's26', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'A = {1, 2} and B = {1, 2, 3, 4}. Is A ⊂ B?',
    options: ['Yes, because all elements of A are in B', 'No, because A has fewer elements', 'No, because B has more elements', 'Only if A = B'], correct: 0,
    explanation: 'Every element of A (1 and 2) is also in B, so A ⊂ B.' },

  { id: 's27', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'C = {2, 4, 6} and D = {1, 2, 3, 4, 5}. Is C ⊂ D?',
    options: ['Yes', 'No, because 6 ∉ D', 'No, because D has odd numbers', 'Yes, because C is smaller'], correct: 1,
    explanation: '6 ∈ C but 6 ∉ D, so C is NOT a subset of D.' },

  { id: 's28', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'Is the empty set a subset of every set?',
    options: ['No', 'Yes', 'Only of the universal set', 'Only of sets with one element'], correct: 1,
    explanation: 'The empty set is a subset of every set, because there are no elements in ∅ that could violate the subset rule.' },

  { id: 's29', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'Is every set a subset of itself?',
    options: ['No', 'Only if the set is empty', 'Yes', 'Only for finite sets'], correct: 2,
    explanation: 'Every set A satisfies A ⊂ A (or more precisely A ⊆ A), since every element of A is in A.' },

  { id: 's30', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'E = {a, b} and F = {a, b, c, d}. Which statement is correct?',
    options: ['F &#8834; E', 'E &#8834; F', 'E = F', 'F &#8712; E'], correct: 1,
    explanation: 'Both a and b are in F, so E ⊂ F.' },

  { id: 's31', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'What is the key difference between ∈ and ⊂?',
    options: ['∈ compares sets; ⊂ compares elements', '∈ is used for an element in a set; ⊂ is used for a set inside another set', 'They mean the same thing', '∈ means union; ⊂ means intersection'], correct: 1,
    explanation: '∈ relates an element to a set (e.g., 3 ∈ A); ⊂ relates a set to another set (e.g., A ⊂ B).' },

  { id: 's32', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'G = {1, 3, 5, 7, 9} and H = {1, 9}. Which is true?',
    options: ['G &#8834; H', 'H &#8834; G', 'G = H', 'H has no subset relationship with G'], correct: 1,
    explanation: '1 ∈ G and 9 ∈ G, so every element of H is in G. Therefore H ⊂ G.' },

  { id: 's33', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'Which of the following is a subset of {a, b, c, d}?',
    options: ['{a, b, e}', '{d, e}', '{b, c}', '{a, f}'], correct: 2,
    explanation: '{b, c}: both b and c are in {a, b, c, d}. ✓' },

  { id: 's34', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'I = {2, 4, 6, 8, 10}. Which of these is NOT a subset of I?',
    options: ['{2, 4}', '{6, 8, 10}', '{2, 5}', '{}'], correct: 2,
    explanation: '5 ∉ I, so {2, 5} is not a subset of I.' },

  { id: 's35', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'J = {months starting with J}: {January, June, July}. Is {June, July} ⊂ J?',
    options: ['No', 'Yes', 'Only if January is included', 'Cannot tell'], correct: 1,
    explanation: 'June ∈ J and July ∈ J, so {June, July} ⊂ J.' },

  { id: 's36', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'If A ⊂ B, which statement MUST be true?',
    options: ['A = B', 'Every element of A is in B', 'B has fewer elements than A', 'A and B share no elements'], correct: 1,
    explanation: 'By definition, A ⊂ B means every element of A is also an element of B.' },

  { id: 's37', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'K = {10, 20, 30}. How many subsets does K have? (Including ∅ and K itself.)',
    options: ['6', '7', '8', '9'], correct: 2,
    explanation: 'A set with n elements has 2ⁿ subsets. 2³ = 8 subsets.' },

  { id: 's38', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'ξ = {1, 2, 3, 4, 5} and A = {1, 2, 3, 4, 5}. Which relationship holds?',
    options: ['A &#8834; &#958;', '&#958; &#8834; A', 'Both A &#8834; &#958; and &#958; &#8834; A', 'Neither'], correct: 2,
    explanation: 'Since A = ξ (same elements), A ⊂ ξ and ξ ⊂ A are both true.' },

  { id: 's39', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'Which of the following correctly uses ⊂?',
    options: ['3 &#8834; {1, 2, 3}', '{3} &#8834; {1, 2, 3}', '{1, 2, 3} &#8834; 3', '3 &#8834; 3'], correct: 1,
    explanation: '{3} is a set and {1,2,3} is a set. Since 3 ∈ {1,2,3}, we have {3} ⊂ {1,2,3}.' },

  { id: 's40', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'L = {prime numbers less than 10} = {2, 3, 5, 7}. Is {2, 7} ⊂ L?',
    options: ['No', 'Yes', 'Only if 3 is also included', 'Cannot tell'], correct: 1,
    explanation: '2 ∈ L and 7 ∈ L, so {2, 7} ⊂ L.' },

  { id: 's41', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'M = {a, e, i, o, u}. Is {a, b} ⊂ M?',
    options: ['Yes', 'No, because b ∉ M', 'Yes, because a ∈ M', 'Only if b is a vowel'], correct: 1,
    explanation: 'b ∉ M, so {a, b} is NOT a subset of M.' },

  { id: 's42', part: 'Part 2: Subsets & &#8834;', type: 'mcq',
    text: 'If A = {} (empty set) and B = {1, 2, 3}, is A ⊂ B?',
    options: ['No, because A has no elements', 'Yes, the empty set is a subset of every set', 'Only if 0 ∈ B', 'Cannot tell'], correct: 1,
    explanation: 'The empty set is a subset of every set, including B.' },

  { id: 's43', part: 'Part 2: Subsets & &#8834;', type: 'fill',
    text: 'Write the symbol that means "is a subset of".',
    answer: ['⊂', '&sub;'], explanation: '⊂ means "is a subset of".' },

  { id: 's44', part: 'Part 2: Subsets & &#8834;', type: 'fill',
    text: 'A = {1, 2, 3} and B = {1, 2, 3, 4, 5}. Write a true statement using ⊂.',
    answer: ['A ⊂ B', 'A is a subset of B'], explanation: 'All elements of A are in B, so A ⊂ B.' },

  { id: 's45', part: 'Part 2: Subsets & &#8834;', type: 'fill',
    text: 'How many subsets does the set {p, q} have (including the empty set and the set itself)?',
    answer: ['4'], explanation: '2² = 4 subsets: {}, {p}, {q}, {p,q}.' },

  { id: 's46', part: 'Part 2: Subsets & &#8834;', type: 'fill',
    text: 'C = {3, 6, 9}. Is {3, 6} a subset of C? Write yes or no.',
    answer: ['yes'], explanation: '3 ∈ C and 6 ∈ C, so {3, 6} ⊂ C.' },

  // ── Part 3: Union & Intersection (28 questions: 22 MCQ, 6 fill) ──

  { id: 's47', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'A ∪ B means:',
    options: ['All elements in both A and B (combined)', 'Only elements in both A and B', 'Elements only in A', 'Elements only in B'], correct: 0,
    explanation: 'A ∪ B (union) is the set of all elements in A, or B, or both.' },

  { id: 's48', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'A ∩ B means:',
    options: ['All elements in A or B', 'Only elements in both A and B', 'Elements only in A', 'Elements not in A or B'], correct: 1,
    explanation: 'A ∩ B (intersection) is the set of elements that are in both A AND B.' },

  { id: 's49', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'A = {1, 2, 3} and B = {3, 4, 5}. What is A ∪ B?',
    options: ['{3}', '{1, 2, 4, 5}', '{1, 2, 3, 4, 5}', '{1, 2, 3, 3, 4, 5}'], correct: 2,
    explanation: 'A ∪ B combines all elements from both sets (no duplicates): {1, 2, 3, 4, 5}.' },

  { id: 's50', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'A = {1, 2, 3} and B = {3, 4, 5}. What is A ∩ B?',
    options: ['{1, 2}', '{3}', '{4, 5}', '{1, 2, 3, 4, 5}'], correct: 1,
    explanation: 'Only 3 appears in both A and B, so A ∩ B = {3}.' },

  { id: 's51', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'C = {a, b, c} and D = {d, e, f}. What is C ∩ D?',
    options: ['{a, b, c, d, e, f}', '{a, b, c}', '{}', '{d, e, f}'], correct: 2,
    explanation: 'C and D share no common elements, so C ∩ D = ∅ (empty set).' },

  { id: 's52', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'E = {2, 4, 6, 8} and F = {1, 2, 3, 4}. What is E ∪ F?',
    options: ['{2, 4}', '{1, 2, 3, 4, 6, 8}', '{1, 2, 3, 4, 5, 6, 7, 8}', '{1, 3}'], correct: 1,
    explanation: 'E ∪ F = {1, 2, 3, 4, 6, 8} (all elements from both, no repeats).' },

  { id: 's53', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'E = {2, 4, 6, 8} and F = {1, 2, 3, 4}. What is E ∩ F?',
    options: ['{1, 3}', '{2}', '{2, 4}', '{4, 6, 8}'], correct: 2,
    explanation: 'Both 2 and 4 appear in E and F, so E ∩ F = {2, 4}.' },

  { id: 's54', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'Which symbol represents union?',
    options: ['&#8745;', '&#8712;', '&#8746;', '&#8834;'], correct: 2,
    explanation: '∪ represents union — the combination of two sets.' },

  { id: 's55', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'Which symbol represents intersection?',
    options: ['&#8746;', '&#8834;', '&#8712;', '&#8745;'], correct: 3,
    explanation: '∩ represents intersection — the elements common to both sets.' },

  { id: 's56', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'G = {1, 3, 5} and H = {1, 3, 5}. What is G ∩ H?',
    options: ['{}', '{1}', '{1, 3, 5}', '{1, 3, 5, 1, 3, 5}'], correct: 2,
    explanation: 'When G = H, their intersection is the same set: G ∩ H = {1, 3, 5}.' },

  { id: 's57', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'I = {10, 20, 30} and J = {}. What is I ∪ J?',
    options: ['{}', '{10, 20, 30}', '{0, 10, 20, 30}', 'Cannot be calculated'], correct: 1,
    explanation: 'Union with the empty set leaves the set unchanged: I ∪ ∅ = I = {10, 20, 30}.' },

  { id: 's58', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'I = {10, 20, 30} and J = {}. What is I ∩ J?',
    options: ['{10, 20, 30}', '{10}', '{}', 'Cannot be calculated'], correct: 2,
    explanation: 'Intersection with the empty set is always empty: I ∩ ∅ = ∅.' },

  { id: 's59', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'K = {factors of 12} = {1, 2, 3, 4, 6, 12} and L = {factors of 8} = {1, 2, 4, 8}. What is K ∩ L?',
    options: ['{1, 2}', '{1, 2, 4}', '{1, 2, 4, 8, 12}', '{4, 6}'], correct: 1,
    explanation: 'Common factors of 12 and 8 are 1, 2, and 4. K ∩ L = {1, 2, 4}.' },

  { id: 's60', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'M = {vowels} = {a, e, i, o, u} and N = {a, b, c, d, e}. What is M ∩ N?',
    options: ['{a, e}', '{a, b, c, d, e, i, o, u}', '{b, c, d}', '{i, o, u}'], correct: 0,
    explanation: 'Letters in both M and N: a and e. M ∩ N = {a, e}.' },

  { id: 's61', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'P = {multiples of 2 up to 10} = {2, 4, 6, 8, 10} and Q = {multiples of 3 up to 10} = {3, 6, 9}. What is P ∪ Q?',
    options: ['{6}', '{2, 3, 4, 6, 8, 9, 10}', '{2, 4, 6, 8, 10, 3, 9}', '{2, 3, 4, 6, 8, 9, 10}'], correct: 3,
    explanation: 'All elements from both sets: {2, 3, 4, 6, 8, 9, 10}.' },

  { id: 's62', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'P = {2, 4, 6, 8, 10} and Q = {3, 6, 9}. What is P ∩ Q?',
    options: ['{6}', '{2, 3, 4}', '{3, 6, 8, 9}', '{}'], correct: 0,
    explanation: 'Only 6 appears in both P and Q. P ∩ Q = {6}.' },

  { id: 's63', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'If two sets share no elements, they are called:',
    options: ['Equal sets', 'Disjoint sets', 'Universal sets', 'Subsets'], correct: 1,
    explanation: 'Sets with no elements in common are called disjoint sets. Their intersection is empty.' },

  { id: 's64', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'A = {1, 2} and B = {1, 2, 3, 4}. What is A ∪ B?',
    options: ['{1, 2}', '{3, 4}', '{1, 2, 3, 4}', '{1, 2, 1, 2, 3, 4}'], correct: 2,
    explanation: 'A ∪ B = all elements in A or B = {1, 2, 3, 4}.' },

  { id: 's65', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'R = {red, blue} and S = {blue, green, red}. What is R ∩ S?',
    options: ['{blue}', '{red}', '{red, blue}', '{red, blue, green}'], correct: 2,
    explanation: 'Both red and blue appear in R and S. R ∩ S = {red, blue}.' },

  { id: 's66', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'T = {3, 6, 9} and U = {3, 6, 9}. What is T ∪ U?',
    options: ['{}', '{3, 6, 9}', '{3, 6, 9, 3, 6, 9}', '{6}'], correct: 1,
    explanation: 'When T = U, the union is the same set (no duplicates): {3, 6, 9}.' },

  { id: 's67', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'For any set A, what is A ∪ A?',
    options: ['{}', 'A', '2A', 'Cannot be determined'], correct: 1,
    explanation: 'A ∪ A = A. Unioning a set with itself gives the same set.' },

  { id: 's68', part: 'Part 3: Union & Intersection', type: 'mcq',
    text: 'V = {1, 2, 3, 4, 5} and W = {4, 5, 6, 7}. How many elements does V ∪ W have?',
    options: ['5', '6', '7', '9'], correct: 2,
    explanation: 'V ∪ W = {1, 2, 3, 4, 5, 6, 7} — 7 elements.' },

  { id: 's69', part: 'Part 3: Union & Intersection', type: 'fill',
    text: 'A = {1, 2, 3} and B = {2, 3, 4, 5}. Write A ∩ B.',
    answer: ['{2,3}', '{2, 3}', '{3,2}', '{3, 2}'], explanation: '2 and 3 appear in both A and B.' },

  { id: 's70', part: 'Part 3: Union & Intersection', type: 'fill',
    text: 'C = {a, b, c} and D = {b, c, d, e}. Write C ∪ D.',
    answer: ['{a,b,c,d,e}', '{a, b, c, d, e}'], explanation: 'All elements from C and D combined: {a, b, c, d, e}.' },

  { id: 's71', part: 'Part 3: Union & Intersection', type: 'fill',
    text: 'E = {5, 10, 15} and F = {10, 20}. How many elements does E ∩ F have?',
    answer: ['1'], explanation: 'Only 10 is in both E and F. E ∩ F = {10}, which has 1 element.' },

  { id: 's72', part: 'Part 3: Union & Intersection', type: 'fill',
    text: 'G = {2, 4, 6} and H = {1, 3, 5}. What is G ∩ H? Write the set.',
    answer: ['{}', '∅', 'empty set'], explanation: 'G and H share no common elements, so G ∩ H = ∅.' },

  { id: 's73', part: 'Part 3: Union & Intersection', type: 'fill',
    text: 'I = {p, q, r} and J = {q, r, s, t}. Write I ∪ J.',
    answer: ['{p,q,r,s,t}', '{p, q, r, s, t}'], explanation: 'All elements combined: {p, q, r, s, t}.' },

  { id: 's74', part: 'Part 3: Union & Intersection', type: 'fill',
    text: 'A = {1, 2, 3, 4, 5} and B = {3, 4, 5, 6, 7}. Write A ∩ B.',
    answer: ['{3,4,5}', '{3, 4, 5}'], explanation: '3, 4, and 5 appear in both A and B.' },

  // ── Part 4: Venn Diagrams & Complement (26 questions: 21 MCQ, 5 fill) ──

  { id: 's75', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'In a Venn diagram, the overlapping region of circles A and B represents:',
    options: ['A ∪ B', 'A ∩ B', 'A\'', 'B\''], correct: 1,
    explanation: 'The overlapping region shows elements in both A and B — that is A ∩ B.' },

  { id: 's76', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'In a Venn diagram, A′ (the complement of A) represents:',
    options: ['All elements in A', 'All elements NOT in A (but in ξ)', 'All elements in A and B', 'The empty set'], correct: 1,
    explanation: 'A′ is the complement of A: all elements in the universal set ξ that are NOT in A.' },

  { id: 's77', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'ξ = {1, 2, 3, 4, 5, 6} and A = {2, 4, 6}. What is A′?',
    options: ['{2, 4, 6}', '{1, 3, 5}', '{1, 2, 3}', '{}'], correct: 1,
    explanation: 'A′ contains all elements of ξ not in A: {1, 3, 5}.' },

  { id: 's78', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'ξ = {a, b, c, d, e} and B = {a, c, e}. What is B′?',
    options: ['{a, c, e}', '{a, b, c, d, e}', '{b, d}', '{d, e}'], correct: 2,
    explanation: 'B′ = all elements of ξ not in B = {b, d}.' },

  { id: 's79', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'In a Venn diagram with two circles, the region inside both circles is labelled:',
    options: ['A only', 'B only', 'A ∩ B', 'A ∪ B'], correct: 2,
    explanation: 'The region inside both circles represents elements in A AND B — the intersection A ∩ B.' },

  { id: 's80', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'What does the rectangle in a Venn diagram represent?',
    options: ['Set A', 'Set B', 'A ∩ B', 'The universal set ξ'], correct: 3,
    explanation: 'The rectangle (or box) surrounding all circles in a Venn diagram represents the universal set ξ.' },

  { id: 's81', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'ξ = {1…10}, A = {1, 2, 3, 4, 5}. What is A′?',
    options: ['{1, 2, 3, 4, 5}', '{6, 7, 8, 9, 10}', '{5, 6, 7, 8, 9, 10}', '{}'], correct: 1,
    explanation: 'A′ contains all elements of ξ not in A: {6, 7, 8, 9, 10}.' },

  { id: 's82', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'What is (A′)′ equal to?',
    options: ['∅', 'ξ', 'A', 'B'], correct: 2,
    explanation: 'Taking the complement twice returns the original set: (A′)′ = A.' },

  { id: 's83', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'A Venn diagram shows: only in A = {1, 2}; only in B = {5, 6}; in both = {3, 4}. What is A ∪ B?',
    options: ['{3, 4}', '{1, 2, 5, 6}', '{1, 2, 3, 4, 5, 6}', '{1, 2}'], correct: 2,
    explanation: 'A ∪ B includes all elements in A or B: {1, 2, 3, 4, 5, 6}.' },

  { id: 's84', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'Using the Venn diagram from q83: what is A ∩ B?',
    options: ['{1, 2}', '{3, 4}', '{5, 6}', '{1, 2, 5, 6}'], correct: 1,
    explanation: 'The overlapping region (in both A and B) is {3, 4}.' },

  { id: 's85', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'ξ = {1, 2, 3, 4, 5, 6, 7, 8} and A ∪ B = {2, 3, 5, 6, 7}. What is (A ∪ B)′?',
    options: ['{2, 3, 5, 6, 7}', '{1, 4, 8}', '{1, 2, 3, 4}', '{}'], correct: 1,
    explanation: '(A ∪ B)′ contains all elements of ξ not in A ∪ B: {1, 4, 8}.' },

  { id: 's86', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'In a Venn diagram, elements outside both circles (but inside the rectangle) are in:',
    options: ['A ∩ B', 'A ∪ B', '(A ∪ B)′', 'A′ ∩ B′'], correct: 2,
    explanation: 'Elements outside both circles are not in A or B — they are in the complement of A ∪ B, which is (A ∪ B)′.' },

  { id: 's87', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'ξ = {1, 2, 3, 4, 5} and C = {}. What is C′?',
    options: ['{}', '{1, 2, 3, 4, 5}', 'ξ itself', 'Both B and C are correct'], correct: 3,
    explanation: 'C′ = all elements of ξ not in C. Since C is empty, C′ = ξ = {1, 2, 3, 4, 5}.' },

  { id: 's88', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'ξ = {1, 2, 3, 4, 5} and D = ξ. What is D′?',
    options: ['ξ', '{1, 2, 3, 4, 5}', '{}', 'Cannot tell'], correct: 2,
    explanation: 'If D = ξ, then D′ = elements of ξ not in D = nothing = ∅.' },

  { id: 's89', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'A Venn diagram has ξ = {1–9}, A = {1, 3, 5, 7, 9}, B = {2, 4, 6, 8}. What is A ∩ B?',
    options: ['{1, 2, 3, 4, 5, 6, 7, 8, 9}', '{1, 3, 5, 7, 9}', '{2, 4, 6, 8}', '{}'], correct: 3,
    explanation: 'A (odd) and B (even) share no elements. A ∩ B = ∅.' },

  { id: 's90', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'In a Venn diagram the region "only in A" (not in B) contains:',
    options: ['A ∩ B', 'A ∪ B', 'A ∩ B′', 'A′ ∩ B'], correct: 2,
    explanation: '"Only in A" means elements in A that are NOT in B — that is A ∩ B′.' },

  { id: 's91', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {2, 4, 6, 8, 10}, B = {1, 2, 3, 4, 5}. How many elements are in A′?',
    options: ['4', '5', '6', '7'], correct: 1,
    explanation: 'A = {2, 4, 6, 8, 10} has 5 elements. A′ contains all elements of ξ not in A: {1, 3, 5, 7, 9} — 5 elements.' },

  { id: 's92', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {2, 4, 6, 8, 10}, B = {1, 2, 3, 4, 5}. What is A ∩ B?',
    options: ['{2}', '{2, 4}', '{2, 4, 6}', '{4}'], correct: 1,
    explanation: 'Elements in both A and B: 2 and 4. A ∩ B = {2, 4}.' },

  { id: 's93', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'A = {cat, dog, fish} and ξ = {cat, dog, fish, bird, rabbit}. What is A′?',
    options: ['{cat, dog, fish}', '{bird, rabbit}', '{cat, bird}', '{}'], correct: 1,
    explanation: 'A′ contains all elements of ξ not in A: {bird, rabbit}.' },

  { id: 's94', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'Which of the following best describes what a Venn diagram shows?',
    options: ['Only the intersection of sets', 'The logical relationships between sets using overlapping circles', 'Only the union of sets', 'Only the elements of the universal set'], correct: 1,
    explanation: 'Venn diagrams use overlapping circles to visualise relationships between sets — union, intersection, complement, and subsets.' },

  { id: 's95', part: 'Part 4: Venn Diagrams & Complement', type: 'fill',
    text: 'ξ = {1, 2, 3, 4, 5, 6, 7, 8} and A = {1, 3, 5, 7}. Write A′.',
    answer: ['{2,4,6,8}', '{2, 4, 6, 8}'], explanation: 'A′ contains all elements of ξ not in A: {2, 4, 6, 8}.' },

  { id: 's96', part: 'Part 4: Venn Diagrams & Complement', type: 'fill',
    text: 'A Venn diagram shows: A only = {1}, B only = {4}, A ∩ B = {2, 3}. Write A ∪ B.',
    answer: ['{1,2,3,4}', '{1, 2, 3, 4}'], explanation: 'A ∪ B = A only + B only + A ∩ B = {1, 2, 3, 4}.' },

  { id: 's97', part: 'Part 4: Venn Diagrams & Complement', type: 'fill',
    text: 'ξ = {a, b, c, d, e, f} and B = {a, b, c}. How many elements does B′ have?',
    answer: ['3'], explanation: 'B′ = {d, e, f} — 3 elements.' },

  { id: 's98', part: 'Part 4: Venn Diagrams & Complement', type: 'fill',
    text: 'If A′ = {3, 6, 9} and ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9}, write set A.',
    answer: ['{1,2,4,5,7,8}', '{1, 2, 4, 5, 7, 8}'], explanation: 'A contains all elements of ξ not in A′: {1, 2, 4, 5, 7, 8}.' },

  { id: 's99', part: 'Part 4: Venn Diagrams & Complement', type: 'fill',
    text: 'ξ = {1, 2, 3, 4, 5}, A = {1, 2, 3}, B = {2, 3, 4}. What is (A ∩ B)′? Write the set.',
    answer: ['{1,4,5}', '{1, 4, 5}'], explanation: 'A ∩ B = {2, 3}. (A ∩ B)′ contains all elements of ξ not in {2, 3}: {1, 4, 5}.' },

  { id: 's100', part: 'Part 4: Venn Diagrams & Complement', type: 'mcq',
    text: 'ξ = {1, 2, 3, 4, 5, 6}, A = {1, 2, 3}, B = {3, 4, 5}. How many elements are in (A ∪ B)′?',
    options: ['0', '1', '2', '3'], correct: 1,
    explanation: 'A ∪ B = {1, 2, 3, 4, 5}. (A ∪ B)′ contains all elements of ξ not in A ∪ B: {6} — 1 element.' },

];
