const USUARIO_ADMIN = "admin";
// Para trocar a senha, gere outro hash bcrypt (custo 10) e substitua esta constante.
// Exemplo no console: dcodeIO.bcrypt.hash("nova senha", 10).then(console.log)
const HASH_SENHA_ADMIN = "$2a$10$URo3tPakKk.Mopkq1SjFG.Li.7dkk1e.8mTQWdv353grrHOAoQfHG";

if (sessionStorage.getItem("peixaria_sessao")) window.location.href = "admin.html";

document.getElementById("form-login").addEventListener("submit", async (evento) => {
  evento.preventDefault();
  const usuario = document.getElementById("usuario").value.trim();
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("mensagem-erro");
  erro.textContent = "";
  if (!usuario || !senha) {
    erro.textContent = "Preencha o usuário e a senha.";
    return;
  }
  const bcrypt = window.dcodeIO && window.dcodeIO.bcrypt;
  if (!bcrypt) {
    erro.textContent = "Não foi possível carregar o verificador de senha. Verifique sua conexão.";
    return;
  }
  try {
    if (usuario === USUARIO_ADMIN && await bcrypt.compare(senha, HASH_SENHA_ADMIN)) {
      sessionStorage.setItem("peixaria_sessao", "admin");
      window.location.href = "admin.html";
    } else {
      erro.textContent = "Usuário ou senha incorretos.";
    }
  } catch (falha) {
    erro.textContent = "Não foi possível verificar a senha.";
  }
});
