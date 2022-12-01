function swap(num, indiceEsquerda, indiceDireita) {
    var temp = num[indiceEsquerda];
    num[indiceEsquerda] = num[indiceDireita];
    num[indiceDireita] = temp;
  }
  function partition(num, esquerda, direita) {
    var pivo = num[Math.floor((direita + esquerda) / 2)],
      i = esquerda,
      j = direita;
    while (i <= j) {
      while (num[i] < pivo) {
        i++;
      }
      while (num[j] > pivo) {
        j--;
      }
      if (i <= j) {
        swap(num, i, j);
        i++;
        j--;
      }
    }
    return i;
  }
  
  function quickSort(num, esquerda = 0, direita = num.length - 1) {
    var indice;
    if (num.length > 1) {
      indice = partition(num, esquerda, direita);
      if (esquerda < indice - 1) {
        quickSort(num, esquerda, indice - 1);
      }
      if (indice < direita) {
        quickSort(num, indice, direita);
      }
    }
    return num;
  }
  module.exports = quickSort;