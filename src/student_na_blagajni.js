function vrati(a, b, c, d, e, f, n) {
  let lista_povrat = [];
  let lista1 = [a, b, c, d, e, f];
  let lista = [200, 25, 10, 5, 2, 1];
  let i = 0;
  while (n > 0) {
    if (n >= lista[i]) {
      if (lista1[i] > 0) {
        n = n - lista[i];
        lista_povrat.push(lista[i]);
        lista1[i]--;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  return lista_povrat;
}
let x = vrati(0, 1, 1, 2, 1, 1, 46);
console.log(x);
