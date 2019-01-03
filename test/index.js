var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Suma de numeros', function() {
  describe('Suma', function() {
    it('Suma exacta', function() {
      assert.equal(3+3, 6);
    });
  });
});