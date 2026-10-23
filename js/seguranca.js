const campoTexto = document.getElementById("texto-cifrar");
const campoCifrado = document.getElementById("texto-cifrado");
const campoDecifrar = document.getElementById("texto-decifrar");
const resultadoDecifrado = document.getElementById("texto-decifrado");
const mensagemHill = document.getElementById("mensagem-hill");

document.getElementById("cifrar").addEventListener("click", () => {
  try {
    campoCifrado.value = cifrar(campoTexto.value);
    mensagemHill.textContent = "";
  } catch (erro) { mensagemHill.textContent = erro.message; }
});
document.getElementById("decifrar").addEventListener("click", () => {
  try {
    resultadoDecifrado.value = decifrar(campoDecifrar.value);
    mensagemHill.textContent = "";
  } catch (erro) { mensagemHill.textContent = erro.message; }
});
document.getElementById("exemplo").addEventListener("click", () => { campoTexto.value = "Banca Machado"; });
document.getElementById("copiar").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(campoCifrado.value);
    mensagemHill.textContent = "Texto cifrado copiado.";
  } catch (erro) { mensagemHill.textContent = "Não foi possível copiar neste navegador."; }
});
