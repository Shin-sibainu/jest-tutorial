const string = require("./string");

test("String Test", () => {
  expect(string()).toMatch("Hello");
});
