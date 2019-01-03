# TestMochaNodeJs
Proyecto Mocha.
instalación:
Install with npm globally:

$ npm install --global mocha



or as a development dependency for your project:



$ npm install --save-dev mocha


GETTING STARTED

$ npm install mocha

$ mkdir test

$ $EDITOR test/test.js # or open with your favorite editor

In your editor:



var assert = require('assert');

describe('Array', function() {

  describe('#indexOf()', function() {

    it('should return -1 when the value is not present', function() {

      assert.equal([1,2,3].indexOf(4), -1);

    });

  });

});


Set up a test script in package.json:



"scripts": {

    "test": "mocha"

  }

Then run tests with:



$ npm test
