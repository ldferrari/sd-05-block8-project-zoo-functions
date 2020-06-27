const assert = require('assert');
const zoo = require('../src/zoo');
const data = require('../src/data');


describe('increasePrices', () => {
  it('test', () => {
    let actual, expected;

    // data uma porcentagem, incrementa todos os preços, arrendondados em duas casas
    // decimais
    actual = zoo.increasePrices(50);
    expected = {
      'Adult': 74.99,
      'Senior': 37.49,
      'Child': 31.49
    };

    assert.deepEqual(actual, expected);

    actual = zoo.increasePrices(30);
    expected = {
      'Adult': 97.49,
      'Senior': 48.74,
      'Child': 40.94
    };

    assert.deepEqual(actual, expected);
  });
});
