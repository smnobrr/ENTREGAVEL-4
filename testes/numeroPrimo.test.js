const numPrimo = require("../Codigos/numeroPrimo");

test("Testar se o número 19 é primo", () => {
  expect(numPrimo(19)).toBe(true);
});
test("Testar se o número 20 é primo", () => {
  expect(numPrimo(20)).toBe(false);
});
