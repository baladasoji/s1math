const WS_QUESTIONS = [

  // ── Part 1: 3D Shapes (20 questions: 16 MCQ, 4 fill) ──

  { id: 'g01', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'How many faces does a cube have?',
    options: ['4', '6', '8', '12'], correct: 1,
    explanation: 'A cube has 6 square faces.' },

  { id: 'g02', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'How many edges does a cuboid have?',
    options: ['8', '10', '12', '14'], correct: 2,
    explanation: 'A cuboid has 12 edges.' },

  { id: 'g03', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'How many vertices does a triangular prism have?',
    options: ['4', '5', '6', '8'], correct: 2,
    explanation: 'A triangular prism has 2 triangular ends × 3 vertices = 6 vertices.' },

  { id: 'g04', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'Which 3D shape has exactly one curved face and one flat circular face?',
    options: ['Sphere', 'Cone', 'Cylinder', 'Hemisphere'], correct: 1,
    explanation: 'A cone has one curved surface and one flat circular base.' },

  { id: 'g05', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'A square-based pyramid has how many faces?',
    options: ['4', '5', '6', '8'], correct: 1,
    explanation: 'A square-based pyramid has 1 square base + 4 triangular faces = 5 faces.' },

  { id: 'g06', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'Which 3D shape has no vertices and no edges?',
    options: ['Cube', 'Cone', 'Cylinder', 'Sphere'], correct: 3,
    explanation: 'A sphere has only one curved surface — no vertices or edges.' },

  { id: 'g07', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'The top view (plan view) of a cylinder looks like:',
    options: ['A rectangle', 'A triangle', 'A circle', 'A square'], correct: 2,
    explanation: 'Looking down from above, a cylinder appears as a circle.' },

  { id: 'g08', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'A triangular prism rests with a rectangular face as its base. What shape do you see when looking at it from the front?',
    options: ['A triangle', 'A rectangle', 'A circle', 'A trapezium'], correct: 1,
    explanation: 'With a rectangular face as the base, the front face is also rectangular — you see a rectangle.' },

  { id: 'g09', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'How many faces does a triangular prism have?',
    options: ['3', '4', '5', '6'], correct: 2,
    explanation: 'A triangular prism has 2 triangular faces and 3 rectangular faces = 5 faces.' },

  { id: 'g10', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'Which solid has two parallel circular faces and one curved surface?',
    options: ['Cone', 'Cylinder', 'Sphere', 'Prism'], correct: 1,
    explanation: 'A cylinder has two circular ends (parallel) and one curved lateral surface.' },

  { id: 'g11', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'A square-based pyramid has how many edges?',
    options: ['6', '7', '8', '9'], correct: 2,
    explanation: '4 base edges + 4 lateral edges = 8 edges.' },

  { id: 'g12', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'Which 3D shape has all faces that are rectangles?',
    options: ['Cube', 'Cuboid', 'Triangular prism', 'Square pyramid'], correct: 1,
    explanation: 'A cuboid has 6 rectangular faces (a cube is a special cuboid with all squares).' },

  { id: 'g13', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'How many vertices does a cube have?',
    options: ['6', '7', '8', '10'], correct: 2,
    explanation: 'A cube has 8 corners (vertices) — 4 on the top face and 4 on the bottom face.' },

  { id: 'g14', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'The side view of a cone (point upward) is:',
    options: ['A circle', 'A rectangle', 'A triangle', 'A square'], correct: 2,
    explanation: 'Viewed from the side, an upright cone appears as a triangle.' },

  { id: 'g15', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'How many edges does a triangular prism have?',
    options: ['6', '7', '9', '12'], correct: 2,
    explanation: '3 edges on each triangular face (×2) + 3 edges connecting them = 9 edges.' },

  { id: 'g16', part: 'Part 1: 3D Shapes', type: 'mcq',
    text: 'Which pair correctly classifies a cube?',
    options: ['6 faces, 8 edges', '6 faces, 12 edges', '8 faces, 12 edges', '12 faces, 8 edges'], correct: 1,
    explanation: 'A cube: 6 faces, 12 edges, 8 vertices.' },

  { id: 'g17', part: 'Part 1: 3D Shapes', type: 'fill',
    text: 'A cuboid has 6 faces and 8 vertices. Count its edges: it has 4 edges along the top, 4 along the bottom, and 4 vertical edges. How many edges does it have in total?',
    answer: ['12'], explanation: '4 top edges + 4 bottom edges + 4 vertical edges = 12 edges.' },

  { id: 'g18', part: 'Part 1: 3D Shapes', type: 'fill',
    text: 'A triangular-based pyramid (tetrahedron) has 4 triangular faces. Each triangular face has 3 edges, but every edge is shared by 2 faces. How many edges does it have?',
    answer: ['6'], explanation: '4 faces × 3 edges ÷ 2 (each edge shared) = 6 edges.' },

  { id: 'g19', part: 'Part 1: 3D Shapes', type: 'fill',
    text: 'Name the 3D shape that has a circular base, one curved surface, and comes to a point at the top.',
    answer: ['cone'], explanation: 'A cone has a circular base, curved surface, and apex (point).' },

  { id: 'g20', part: 'Part 1: 3D Shapes', type: 'fill',
    text: 'How many faces does a pentagonal prism have? (A pentagonal prism has two pentagonal ends and five rectangular sides.)',
    answer: ['7'], explanation: '2 pentagonal faces + 5 rectangular faces = 7 faces.' },

  // ── Part 2: Nets (16 questions: 13 MCQ, 3 fill) ──

  { id: 'g21', part: 'Part 2: Nets', type: 'mcq',
    text: 'A net of a cube must have exactly how many squares?',
    options: ['4', '5', '6', '8'], correct: 2,
    explanation: 'A cube has 6 faces, so its net consists of 6 squares.' },

  { id: 'g22', part: 'Part 2: Nets', type: 'mcq',
    text: 'A net of a rectangular prism (cuboid) is folded up. Which pair of faces will be directly opposite (parallel) to each other?',
    options: ['Two adjacent faces in the net', 'Two faces separated by one face in a row', 'Any two faces at all', 'Only the largest pair'], correct: 1,
    explanation: 'In a cuboid net, opposite faces are separated by one face in the same row. They become the top/bottom, front/back, or left/right pairs when folded.' },

  { id: 'g23', part: 'Part 2: Nets', type: 'mcq',
    text: 'A net of a triangular prism contains:',
    options: ['3 triangles and 2 rectangles', '2 triangles and 3 rectangles', '2 triangles and 2 rectangles', '3 triangles and 3 rectangles'], correct: 1,
    explanation: 'A triangular prism has 2 triangular ends and 3 rectangular sides.' },

  { id: 'g24', part: 'Part 2: Nets', type: 'mcq',
    text: 'A square-based pyramid\'s net consists of:',
    options: ['1 square and 3 triangles', '1 square and 4 triangles', '2 squares and 4 triangles', '4 triangles only'], correct: 1,
    explanation: '1 square base + 4 triangular faces = net of a square-based pyramid.' },

  { id: 'g25', part: 'Part 2: Nets', type: 'mcq',
    text: 'Which of these statements about nets is true?',
    options: ['A net can only be folded one way', 'Some 3D shapes have more than one valid net', 'Every flat arrangement of faces is a valid net', 'A sphere has a simple net'], correct: 1,
    explanation: 'Most 3D shapes have several different valid nets (e.g., a cube has 11 distinct nets).' },

  { id: 'g26', part: 'Part 2: Nets', type: 'mcq',
    text: 'A net of a cuboid has 6 rectangles. How many pairs of identical rectangles does it have?',
    options: ['1', '2', '3', '6'], correct: 2,
    explanation: 'A cuboid has 3 pairs of identical opposite faces, so 3 pairs of identical rectangles.' },

  { id: 'g27', part: 'Part 2: Nets', type: 'mcq',
    text: 'Which 3D shape does NOT have a net made entirely of flat polygons?',
    options: ['Cube', 'Triangular prism', 'Square pyramid', 'Sphere'], correct: 3,
    explanation: 'A sphere has a curved surface that cannot be unfolded into a flat net of polygons.' },

  { id: 'g28', part: 'Part 2: Nets', type: 'mcq',
    text: 'A triangular prism net is cut out and folded. How many rectangular faces fold up to form the sides of the prism?',
    options: ['2', '3', '4', '5'], correct: 1,
    explanation: 'A triangular prism has 3 rectangular side faces. The net has 2 triangles (the ends) and 3 rectangles (the sides).' },

  { id: 'g29', part: 'Part 2: Nets', type: 'mcq',
    text: 'How many rectangular faces does the net of a rectangular prism (cuboid) have?',
    options: ['2', '4', '6', '8'], correct: 2,
    explanation: 'A cuboid has 6 rectangular faces.' },

  { id: 'g30', part: 'Part 2: Nets', type: 'mcq',
    text: 'A triangular-based pyramid (tetrahedron) net consists of:',
    options: ['1 triangle and 3 rectangles', '4 equilateral triangles', '2 triangles and 2 rectangles', '3 triangles and 1 rectangle'], correct: 1,
    explanation: 'A tetrahedron has 4 triangular faces, so its net consists of 4 triangles.' },

  { id: 'g31', part: 'Part 2: Nets', type: 'mcq',
    text: 'If you fold a net that has 6 squares into a cube, the opposite faces are:',
    options: ['Adjacent to each other in the net', 'Always separated by exactly 2 squares in the net', 'Parallel to each other in the 3D shape', 'All the same colour'], correct: 2,
    explanation: 'In a cube, opposite faces are parallel (facing each other).' },

  { id: 'g32', part: 'Part 2: Nets', type: 'mcq',
    text: 'Which of the following cannot be a net of a cube?',
    options: ['A T-shape of 6 squares', 'An L-shape of 6 squares', 'A row of 4 squares with 1 above and 1 below', '2 rows of 3 squares side by side'], correct: 3,
    explanation: 'Two rows of 3 squares placed side by side (a 2×3 grid) cannot fold into a cube — opposite faces would overlap.' },

  { id: 'g33', part: 'Part 2: Nets', type: 'mcq',
    text: 'The net of a pentagonal prism would contain:',
    options: ['2 pentagons and 4 rectangles', '5 pentagons and 2 rectangles', '2 pentagons and 5 rectangles', '5 rectangles only'], correct: 2,
    explanation: 'A pentagonal prism has 2 pentagonal faces and 5 rectangular faces.' },

  { id: 'g34', part: 'Part 2: Nets', type: 'fill',
    text: 'A net of a square-based pyramid has 1 square and how many triangles?',
    answer: ['4'], explanation: 'The 4 slanted faces are triangles.' },

  { id: 'g35', part: 'Part 2: Nets', type: 'fill',
    text: 'Name the 3D shape whose net consists of exactly 2 triangles and 3 rectangles.',
    answer: ['triangular prism'], explanation: 'A triangular prism has 2 triangular ends and 3 rectangular sides.' },

  { id: 'g36', part: 'Part 2: Nets', type: 'fill',
    text: 'A cube net has 6 squares. If you cut one square off, how many faces would the resulting open box have?',
    answer: ['5'], explanation: 'Removing one square (the top or base) leaves 5 faces — an open box.' },

  // ── Part 3: 2D Shapes (22 questions: 18 MCQ, 4 fill) ──

  { id: 'g37', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A triangle with all three sides equal is called:',
    options: ['Isosceles', 'Scalene', 'Equilateral', 'Right-angled'], correct: 2,
    explanation: 'An equilateral triangle has all three sides (and all three angles) equal.' },

  { id: 'g38', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A triangle with exactly two equal sides is called:',
    options: ['Equilateral', 'Isosceles', 'Scalene', 'Obtuse'], correct: 1,
    explanation: 'An isosceles triangle has exactly two equal sides (and two equal base angles).' },

  { id: 'g39', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A quadrilateral with all four sides equal and all angles 90° is a:',
    options: ['Rectangle', 'Rhombus', 'Square', 'Parallelogram'], correct: 2,
    explanation: 'A square has all sides equal AND all angles equal to 90°.' },

  { id: 'g40', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'How many sides does a hexagon have?',
    options: ['5', '6', '7', '8'], correct: 1,
    explanation: 'A hexagon has 6 sides (hexa = six in Greek).' },

  { id: 'g41', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A regular polygon has all sides equal and all angles equal. Which of these is always regular?',
    options: ['Rectangle', 'Rhombus', 'Equilateral triangle', 'Parallelogram'], correct: 2,
    explanation: 'An equilateral triangle always has equal sides AND equal angles (60° each), so it is always regular.' },

  { id: 'g42', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'Which quadrilateral has exactly one pair of parallel sides?',
    options: ['Parallelogram', 'Rectangle', 'Trapezium', 'Rhombus'], correct: 2,
    explanation: 'A trapezium has exactly one pair of parallel sides.' },

  { id: 'g43', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'How many sides does a decagon have?',
    options: ['8', '9', '10', '12'], correct: 2,
    explanation: 'A decagon has 10 sides (deca = ten).' },

  { id: 'g44', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A parallelogram has:',
    options: ['All angles equal to 90°', 'Two pairs of parallel sides', 'All sides equal', 'No parallel sides'], correct: 1,
    explanation: 'A parallelogram has two pairs of parallel (and equal) opposite sides.' },

  { id: 'g45', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'Which triangle has a 90° angle?',
    options: ['Equilateral', 'Isosceles', 'Scalene', 'Right-angled'], correct: 3,
    explanation: 'A right-angled triangle has one angle that is exactly 90°.' },

  { id: 'g46', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A rhombus is a quadrilateral where:',
    options: ['All angles are 90°', 'All four sides are equal', 'Opposite sides are parallel but not equal', 'It has only one pair of parallel sides'], correct: 1,
    explanation: 'A rhombus has all four sides of equal length (like a squashed square).' },

  { id: 'g47', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'How many sides does a nonagon have?',
    options: ['7', '8', '9', '10'], correct: 2,
    explanation: 'A nonagon has 9 sides (nona = nine).' },

  { id: 'g48', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A triangle where all three sides have different lengths is:',
    options: ['Equilateral', 'Isosceles', 'Scalene', 'Right-angled'], correct: 2,
    explanation: 'A scalene triangle has all sides of different length (and all angles different).' },

  { id: 'g49', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A regular octagon has how many sides?',
    options: ['6', '7', '8', '9'], correct: 2,
    explanation: 'An octagon has 8 sides (octa = eight).' },

  { id: 'g50', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'Which statement about a rectangle is always true?',
    options: ['All four sides are equal', 'All four angles are 90°', 'It has no parallel sides', 'It has only one line of symmetry'], correct: 1,
    explanation: 'A rectangle always has four right angles (90°), though its sides are not necessarily all equal.' },

  { id: 'g51', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'How many sides does a pentagon have?',
    options: ['4', '5', '6', '7'], correct: 1,
    explanation: 'A pentagon has 5 sides (penta = five).' },

  { id: 'g52', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A kite is a quadrilateral with:',
    options: ['Two pairs of parallel sides', 'Two pairs of adjacent equal sides', 'All sides equal', 'No equal sides'], correct: 1,
    explanation: 'A kite has two pairs of adjacent (touching) sides that are equal.' },

  { id: 'g53', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'A regular polygon with 6 sides is called a:',
    options: ['Pentagon', 'Hexagon', 'Heptagon', 'Octagon'], correct: 1,
    explanation: 'A 6-sided regular polygon is a regular hexagon.' },

  { id: 'g54', part: 'Part 3: 2D Shapes', type: 'mcq',
    text: 'Which shape is classified as both a rectangle AND a rhombus?',
    options: ['Parallelogram', 'Trapezium', 'Kite', 'Square'], correct: 3,
    explanation: 'A square has all angles = 90° (rectangle property) AND all sides equal (rhombus property).' },

  { id: 'g55', part: 'Part 3: 2D Shapes', type: 'fill',
    text: 'A triangle has no equal sides and no equal angles. What type of triangle is it?',
    answer: ['scalene'], explanation: 'A scalene triangle has all sides different and all angles different.' },

  { id: 'g56', part: 'Part 3: 2D Shapes', type: 'fill',
    text: 'What is the name of a regular polygon with 8 sides?',
    answer: ['octagon', 'regular octagon'], explanation: 'An 8-sided polygon is an octagon.' },

  { id: 'g57', part: 'Part 3: 2D Shapes', type: 'fill',
    text: 'How many sides does a heptagon have?',
    answer: ['7'], explanation: 'Hepta = seven. A heptagon has 7 sides.' },

  { id: 'g58', part: 'Part 3: 2D Shapes', type: 'fill',
    text: 'A quadrilateral with two pairs of parallel sides and all angles equal to 90° is called a ______.',
    answer: ['rectangle'], explanation: 'A rectangle has two pairs of parallel sides and four 90° angles.' },

  // ── Part 4: Triangle Construction & Compass Directions (16 questions: 13 MCQ, 3 fill) ──

  { id: 'g59', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'SSS construction means you are given:',
    options: ['Two sides and the included angle', 'All three sides', 'Two angles and the included side', 'One side and one angle'], correct: 1,
    explanation: 'SSS = Side-Side-Side: you are given the lengths of all three sides.' },

  { id: 'g60', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'SAS construction means you are given:',
    options: ['All three sides', 'Two sides and the angle between them', 'Two angles and a side', 'One side and two angles'], correct: 1,
    explanation: 'SAS = Side-Angle-Side: two sides and the included (between) angle.' },

  { id: 'g61', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'ASA construction means you are given:',
    options: ['All three angles', 'Two angles and the side between them', 'Two sides and an angle', 'Three sides'], correct: 1,
    explanation: 'ASA = Angle-Side-Angle: two angles and the included side.' },

  { id: 'g62', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'Which tool is used to measure and draw angles accurately?',
    options: ['Ruler', 'Set square', 'Protractor', 'Compass'], correct: 2,
    explanation: 'A protractor measures and draws angles in degrees.' },

  { id: 'g63', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'Which tool is used to draw arcs and circles during SSS construction?',
    options: ['Ruler', 'Protractor', 'Compass', 'Set square'], correct: 2,
    explanation: 'A compass is used to draw arcs of a fixed radius during geometric construction.' },

  { id: 'g64', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'North and South are:',
    options: ['Perpendicular directions', 'Opposite directions', 'The same direction', 'Diagonal directions'], correct: 1,
    explanation: 'North and South are exactly opposite compass directions (180° apart).' },

  { id: 'g65', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'If you face North and turn 90° clockwise, you now face:',
    options: ['South', 'East', 'West', 'North-East'], correct: 1,
    explanation: 'Turning 90° clockwise from North brings you to East.' },

  { id: 'g66', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'If you face East and turn 180°, you now face:',
    options: ['North', 'South', 'East', 'West'], correct: 3,
    explanation: 'A 180° turn from East points you West (the opposite direction).' },

  { id: 'g67', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'SSA construction can sometimes produce:',
    options: ['No triangle', 'Exactly one triangle', 'Two different triangles', 'All of the above depending on the measurements'], correct: 3,
    explanation: 'SSA is the ambiguous case: depending on the angle and side lengths, you may get 0, 1, or 2 triangles.' },

  { id: 'g68', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'To construct a triangle using SSS, you need to know:',
    options: ['The three angles', 'The three side lengths', 'Two sides and an angle', 'One side and two angles'], correct: 1,
    explanation: 'SSS requires all three side lengths.' },

  { id: 'g69', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'South-West is located between which two compass directions?',
    options: ['North and West', 'South and East', 'South and West', 'North and East'], correct: 2,
    explanation: 'South-West lies between South and West (halfway, at 225° from North).' },

  { id: 'g70', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'A set square is used to:',
    options: ['Measure lengths', 'Draw circles', 'Draw right angles and parallel lines', 'Measure compass directions'], correct: 2,
    explanation: 'A set square is used to draw perpendicular (90°) lines and parallel lines accurately.' },

  { id: 'g71', part: 'Part 4: Triangle Construction & Compass Directions', type: 'mcq',
    text: 'If you face South and turn 90° anticlockwise, you now face:',
    options: ['North', 'East', 'West', 'South-East'], correct: 1,
    explanation: 'Anticlockwise from South: South → East (turning left when facing South).' },

  { id: 'g72', part: 'Part 4: Triangle Construction & Compass Directions', type: 'fill',
    text: 'What is the minimum information needed to construct a unique triangle using the SAS method? (write the three items separated by commas)',
    answer: ['two sides and the included angle', '2 sides and the included angle', 'two sides, included angle'], explanation: 'SAS: you need two side lengths and the angle between them.' },

  { id: 'g73', part: 'Part 4: Triangle Construction & Compass Directions', type: 'fill',
    text: 'If you face North and turn 270° clockwise, you now face which direction?',
    answer: ['west', 'West'], explanation: '270° clockwise from North = 90° anticlockwise = West.' },

  { id: 'g74', part: 'Part 4: Triangle Construction & Compass Directions', type: 'fill',
    text: 'Name the construction method that uses two angles and the side between them.',
    answer: ['ASA', 'asa'], explanation: 'ASA = Angle-Side-Angle.' },

  // ── Part 5: Measurement (26 questions: 20 MCQ, 6 fill) ──

  { id: 'g75', part: 'Part 5: Measurement', type: 'mcq',
    text: 'What is the perimeter of a rectangle with length 8 cm and width 5 cm?',
    options: ['13 cm', '26 cm', '40 cm', '80 cm'], correct: 1,
    explanation: 'Perimeter = 2(l + w) = 2(8 + 5) = 2 × 13 = 26 cm.' },

  { id: 'g76', part: 'Part 5: Measurement', type: 'mcq',
    text: 'What is the area of a square with side 7 cm?',
    options: ['14 cm²', '28 cm²', '49 cm²', '56 cm²'], correct: 2,
    explanation: 'Area = side² = 7² = 49 cm².' },

  { id: 'g77', part: 'Part 5: Measurement', type: 'mcq',
    text: 'What is the area of a rectangle with length 9 m and width 4 m?',
    options: ['13 m²', '26 m²', '36 m²', '72 m²'], correct: 2,
    explanation: 'Area = l × w = 9 × 4 = 36 m².' },

  { id: 'g78', part: 'Part 5: Measurement', type: 'mcq',
    text: 'How many centimetres are in 1 metre?',
    options: ['10', '100', '1000', '10000'], correct: 1,
    explanation: '1 m = 100 cm.' },

  { id: 'g79', part: 'Part 5: Measurement', type: 'mcq',
    text: 'How many millimetres are in 1 centimetre?',
    options: ['1', '10', '100', '1000'], correct: 1,
    explanation: '1 cm = 10 mm.' },

  { id: 'g80', part: 'Part 5: Measurement', type: 'mcq',
    text: 'A cuboid is built from unit cubes. It is 3 cubes long, 2 cubes wide, and 4 cubes tall. What is its volume?',
    options: ['9 unit³', '18 unit³', '24 unit³', '32 unit³'], correct: 2,
    explanation: 'Volume = l × w × h = 3 × 2 × 4 = 24 unit cubes.' },

  { id: 'g81', part: 'Part 5: Measurement', type: 'mcq',
    text: 'What is the perimeter of a square with side 6 cm?',
    options: ['12 cm', '18 cm', '24 cm', '36 cm'], correct: 2,
    explanation: 'Perimeter = 4 × side = 4 × 6 = 24 cm.' },

  { id: 'g82', part: 'Part 5: Measurement', type: 'mcq',
    text: 'Convert 2.5 km to metres.',
    options: ['25 m', '250 m', '2500 m', '25000 m'], correct: 2,
    explanation: '1 km = 1000 m. 2.5 × 1000 = 2500 m.' },

  { id: 'g83', part: 'Part 5: Measurement', type: 'mcq',
    text: 'How many metres are in 1 kilometre?',
    options: ['10', '100', '1000', '10000'], correct: 2,
    explanation: '1 km = 1000 m.' },

  { id: 'g84', part: 'Part 5: Measurement', type: 'mcq',
    text: 'The area of a square is 64 cm². What is the length of one side?',
    options: ['6 cm', '7 cm', '8 cm', '16 cm'], correct: 2,
    explanation: 'Side = √64 = 8 cm.' },

  { id: 'g85', part: 'Part 5: Measurement', type: 'mcq',
    text: 'A box is filled with unit cubes arranged in a 5 × 3 × 2 pattern. How many cubes fit?',
    options: ['10', '15', '25', '30'], correct: 3,
    explanation: 'Volume = 5 × 3 × 2 = 30 unit cubes.' },

  { id: 'g86', part: 'Part 5: Measurement', type: 'mcq',
    text: 'How many grams are in 1 kilogram?',
    options: ['10', '100', '1000', '10000'], correct: 2,
    explanation: '1 kg = 1000 g.' },

  { id: 'g87', part: 'Part 5: Measurement', type: 'mcq',
    text: '1 foot is approximately equal to:',
    options: ['10 cm', '20 cm', '30 cm', '100 cm'], correct: 2,
    explanation: '1 foot ≈ 30 cm (more precisely 30.48 cm).' },

  { id: 'g88', part: 'Part 5: Measurement', type: 'mcq',
    text: 'A rectangle has area 48 cm² and length 8 cm. What is its width?',
    options: ['4 cm', '5 cm', '6 cm', '7 cm'], correct: 2,
    explanation: 'Width = Area ÷ Length = 48 ÷ 8 = 6 cm.' },

  { id: 'g89', part: 'Part 5: Measurement', type: 'mcq',
    text: 'Convert 350 cm to metres.',
    options: ['0.35 m', '3.5 m', '35 m', '3500 m'], correct: 1,
    explanation: '350 cm ÷ 100 = 3.5 m.' },

  { id: 'g90', part: 'Part 5: Measurement', type: 'mcq',
    text: 'Which metric unit is most appropriate for measuring the mass of a pencil?',
    options: ['Milligram', 'Gram', 'Kilogram', 'Tonne'], correct: 1,
    explanation: 'A pencil typically weighs a few grams. Grams are the appropriate unit.' },

  { id: 'g91', part: 'Part 5: Measurement', type: 'mcq',
    text: 'A rectangle has perimeter 30 cm and width 6 cm. What is its length?',
    options: ['7 cm', '8 cm', '9 cm', '24 cm'], correct: 2,
    explanation: '2(l + 6) = 30 → l + 6 = 15 → l = 9 cm.' },

  { id: 'g92', part: 'Part 5: Measurement', type: 'mcq',
    text: 'How many milligrams are in 1 gram?',
    options: ['10', '100', '1000', '10000'], correct: 2,
    explanation: '1 g = 1000 mg.' },

  { id: 'g93', part: 'Part 5: Measurement', type: 'mcq',
    text: 'A cuboid has length 5 cm, width 4 cm, height 3 cm. What is its volume (counted as unit cubes)?',
    options: ['12 cm³', '20 cm³', '60 cm³', '120 cm³'], correct: 2,
    explanation: 'Volume = 5 × 4 × 3 = 60 cm³.' },

  { id: 'g94', part: 'Part 5: Measurement', type: 'mcq',
    text: '1 mile is approximately equal to:',
    options: ['1 km', '1.6 km', '2 km', '5 km'], correct: 1,
    explanation: '1 mile ≈ 1.6 km (more precisely 1.609 km).' },

  { id: 'g95', part: 'Part 5: Measurement', type: 'fill',
    text: 'What is the perimeter of a rectangle with length 12 cm and width 7 cm? Give your answer in cm.',
    answer: ['38', '38 cm'], explanation: 'P = 2(12 + 7) = 2 × 19 = 38 cm.' },

  { id: 'g96', part: 'Part 5: Measurement', type: 'fill',
    text: 'A square has a perimeter of 36 cm. What is the area of the square in cm²?',
    answer: ['81', '81 cm²'], explanation: 'Side = 36 ÷ 4 = 9 cm. Area = 9² = 81 cm².' },

  { id: 'g97', part: 'Part 5: Measurement', type: 'fill',
    text: 'A cuboid is made from unit cubes in a 4 × 4 × 4 arrangement. How many unit cubes are used?',
    answer: ['64'], explanation: '4 × 4 × 4 = 64 unit cubes.' },

  { id: 'g98', part: 'Part 5: Measurement', type: 'fill',
    text: 'Convert 4500 g to kilograms.',
    answer: ['4.5', '4.5 kg'], explanation: '4500 ÷ 1000 = 4.5 kg.' },

  { id: 'g99', part: 'Part 5: Measurement', type: 'fill',
    text: 'A rectangle has an area of 72 m² and a length of 9 m. What is its width in metres?',
    answer: ['8', '8 m'], explanation: 'Width = 72 ÷ 9 = 8 m.' },

  { id: 'g100', part: 'Part 5: Measurement', type: 'fill',
    text: 'Convert 0.25 km to metres.',
    answer: ['250', '250 m'], explanation: '0.25 × 1000 = 250 m.' },

];
