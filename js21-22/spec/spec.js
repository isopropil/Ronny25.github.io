var test = require('../js/dist/script.js');

describe("test", function() {
  it("checking test for say hello", function() {
    var result;

    result = test.sayHello('Taras');

    expect(result).toBe('Hello, Taras!');
  });
});
