const substract = require("./substract");

test("引き算", () => {
  expect(substract(1, 2)).toBe(-1);
});
