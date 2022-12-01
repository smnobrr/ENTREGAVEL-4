const fibonacci = require("../Codigos/fibonacci");

test("5 termos", () => {
  expect(fibonacci(5)).toMatchObject([
    0, 1, 1, 2, 3,
  ]);
});
test("15 termos", () => {
  expect(fibonacci(15)).toMatchObject([
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
  ]);
});
