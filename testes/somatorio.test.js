const somatorio = require("../Codigos/somatorio");

test("10 + 2 = 12", () => {
  expect(somatorio([10, 2])).toBe(12);
});
test("45 + 4 = 49", () => {
  expect(somatorio([45, 4])).toBe(49);
});
