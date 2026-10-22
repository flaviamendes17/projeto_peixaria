const ALFABETO_HILL = "ZABCDEFGHIJKLMNOPQRSTUVWXYzabcdefghijklmnopqrstuvwxy0123456789!@#$%&*()_+-=,.;:<>?/|[]{} ";
const N_HILL = ALFABETO_HILL.length;
const M_HILL = [[3, 3], [2, 5]];
const M_INV_HILL = [[50, 59], [69, 30]];

function valida(txt) {
  if (txt.length === 0) throw new Error("O texto não pode ser vazio.");
  for (const caractere of txt) {
    if (!ALFABETO_HILL.includes(caractere)) throw new Error(`Caractere inválido: ${caractere}`);
  }
}

function aplicaMatriz(txt, matriz) {
  if (txt.length % 2 !== 0) txt += " ";
  let resultado = "";
  for (let indice = 0; indice < txt.length; indice += 2) {
    const x = ALFABETO_HILL.indexOf(txt[indice]);
    const y = ALFABETO_HILL.indexOf(txt[indice + 1]);
    const c1 = (matriz[0][0] * x + matriz[0][1] * y) % N_HILL;
    const c2 = (matriz[1][0] * x + matriz[1][1] * y) % N_HILL;
    resultado += ALFABETO_HILL[c1] + ALFABETO_HILL[c2];
  }
  return resultado;
}

function cifrar(txt) {
  txt = txt.trim();
  valida(txt);
  return aplicaMatriz(txt, M_HILL);
}

function decifrar(txt) {
  valida(txt);
  return aplicaMatriz(txt, M_INV_HILL).trimEnd();
}
