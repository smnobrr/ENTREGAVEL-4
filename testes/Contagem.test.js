const contagem = require("../Codigos/Contagem");

test("5 alunos, 2 aprovados: 1, 2, 5, 8, 7", () => {
  expect(contagem([1, 2, 4, 8, 7])).toBe(2);
});
test("5 alunos, 1 aprovado: 1, 3, 3, 4, 10", () => {
  expect(contagem([1, 3, 3, 4, 10])).toBe(1);
});
