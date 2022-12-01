const mdc = require("../Codigos/MDC");

test("o calculo de mdc de 4 e 4 é: 4", () => {
  expect(mdc(4, 4)).toBe(4);
});
test("o calculo de mdc de 7 e 1 é: 1", () => {
  expect(mdc(7, 1)).toBe(1);
});
