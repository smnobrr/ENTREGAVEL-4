function somatorio(n) {
	var soma = 0;
  
	n.forEach((num) => {
	  soma += num;
	});
  
	return soma;
  }
  module.exports = somatorio;