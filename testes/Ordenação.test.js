const quickSort = require("../Codigos/ordenação");

test("555,20,111,-3 será -3,20,111,555 ", () => {
  expect(quickSort([555, 20, 111, -3])).toMatchObject([-3, 20, 111, 555]);
});
test("10, 4,-2,-76 será -76,-2, 4, 10", () => {
  expect(quickSort([10, -2, 4, -76])).toMatchObject([-76, -2, 4, 10]);
});