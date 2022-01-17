const { fibonacci, counteWords, replaceSequence } = require('./index');


test('fibonacci test', () => {
  expect(fibonacci(6)).toBe(8);
});

test('counteWords test', () => {
  
  let words = counteWords("hola hola hola como estas? estas? estas? bien y tu estas bien?");
  let object = Object.fromEntries(words); 

  expect(object).toEqual({
    'hola': 3,
    'como': 1,
    'estas?':3,
    'bien' :1,
    'y' : 1,
    'tu' : 1,
    'estas': 1,
    'bien?':1
  })
}); 

test('replace sequence test', () => {
  expect(replaceSequence()).toEqual([
    1,      2,      'fizz',      4,      'buzz', 'fizz',
    7,      8,      'fizz',      'buzz', 11,     'fizz',
    13,     14,     'fizz buzz', 16,     17,     'fizz',
    19,     'buzz', 'fizz',      22,     23,     'fizz',
    'buzz', 26,     'fizz',      28,     29,     'fizz buzz',
    31,     32,     'fizz',      34,     'buzz', 'fizz',
    37,     38,     'fizz',      'buzz', 41,     'fizz',
    43,     44,     'fizz buzz', 46,     47,     'fizz',
    49,     'buzz', 'fizz',      52,     53,     'fizz',
    'buzz', 56,     'fizz',      58,     59,     'fizz buzz',
    61,     62,     'fizz',      64,     'buzz', 'fizz',
    67,     68,     'fizz',      'buzz', 71,     'fizz',
    73,     74,     'fizz buzz', 76,     77,     'fizz',
    79,     'buzz', 'fizz',      82,     83,     'fizz',
    'buzz', 86,     'fizz',      88,     89,     'fizz buzz',
    91,     92,     'fizz',      94,     'buzz', 'fizz',
    97,     98,     'fizz',      'buzz'
  ]);
});