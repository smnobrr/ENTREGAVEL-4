function fibonacci(nTermos) {
    var listTermos = [0, 1];
    var a = 0,
      b = 1,
      i = 2,
      c;
  
    while (i < nTermos) {
      i = i + 1;
      c = a + b;
      listTermos.push(c);
      a = b;
      b = c;
    }
    if (nTermos <= 0) listTermos = [];
    else if (nTermos == 1) listTermos = [0];
    return listTermos;
  }
  
  module.exports = fibonacci;