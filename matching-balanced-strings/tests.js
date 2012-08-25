test.eq(
  'none balanced substrings',
  getBalancedSubstrings('))(((', '(', ')'),
  []
);

test.eq(
  'singe balanced substring',
  getBalancedSubstrings(') () ) )', '(', ')'),
  [[2, 3]]
);

test.eq(
  'multiple balanced substrings',
  getBalancedSubstrings(') () ) ()', '(', ')'),
  [[2, 3], [7, 8]]
);

test.eq(
  'nested balanced substring',
  getBalancedSubstrings('))((()))(', '(', ')'),
  [[2, 7]]
);

test.eq(
  'not closed balanced substring',
  getBalancedSubstrings('(()()', '(', ')'),
  [[1, 2], [3, 4]]
);

test.eq(
  'deeply nested substrings',
  getBalancedSubstrings(')((()()))) (())', '(', ')'),
  [[1, 8], [11, 14]]
);
