if (!sessionStorage.getItem("peixaria_sessao")) window.location.href = "login.html";

const listaAdmin = document.getElementById("lista-admin");
let produtosAdmin = carregarProdutos();
const categoriasAdmin = [...new Set(produtosAdmin.map((produto) => produto.categoria))];

function renderizarAdmin() {
  listaAdmin.replaceChildren();
  categoriasAdmin.forEach((categoria) => {
    const grupo = document.createElement("section");
    grupo.className = "mb-4";
    const titulo = document.createElement("h2");
    titulo.textContent = categoria;
    grupo.appendChild(titulo);
    produtosAdmin.filter((produto) => produto.categoria === categoria).forEach((produto) => {
      const linha = document.createElement("div");
      linha.className = "card p-3 mb-3";
      const nome = document.createElement("h3");
      nome.className = "h5";
      nome.textContent = produto.nome;
      linha.appendChild(nome);
      const disponibilidade = document.createElement("div");
      disponibilidade.className = "form-check form-switch mb-2";
      const check = document.createElement("input");
      check.className = "form-check-input";
      check.type = "checkbox";
      check.id = `disponivel-${produto.id}`;
      check.checked = produto.disponivel !== false;
      check.dataset.produto = produto.id;
      check.dataset.tipo = "disponivel";
      const label = document.createElement("label");
      label.className = "form-check-label";
      label.htmlFor = check.id;
      label.textContent = "Hoje tem";
      disponibilidade.append(check, label);
      linha.appendChild(disponibilidade);
      produto.precos.forEach((preco, indice) => {
        const campo = document.createElement("div");
        campo.className = "mb-2";
        const rotulo = document.createElement("label");
        rotulo.className = "form-label";
        rotulo.htmlFor = `preco-${produto.id}-${indice}`;
        rotulo.textContent = `${preco.rotulo ? `${preco.rotulo} — ` : ""}${preco.unidade} (R$)`;
        const input = document.createElement("input");
        input.className = "form-control";
        input.type = "number";
        input.step = "0.01";
        input.min = "0";
        input.value = preco.valor;
        input.id = rotulo.htmlFor;
        input.dataset.produto = produto.id;
        input.dataset.preco = indice;
        campo.append(rotulo, input);
        linha.appendChild(campo);
      });
      grupo.appendChild(linha);
    });
    listaAdmin.appendChild(grupo);
  });
}

renderizarAdmin();
document.getElementById("form-admin").addEventListener("keydown", (evento) => {
  if (evento.key === "Enter" && evento.target.tagName !== "BUTTON") evento.preventDefault();
});
document.getElementById("sair").addEventListener("click", () => {
  sessionStorage.removeItem("peixaria_sessao");
  window.location.href = "index.html";
});
document.getElementById("form-admin").addEventListener("submit", (evento) => {
  evento.preventDefault();
  const alerta = document.getElementById("alerta-admin");
  const atualizados = JSON.parse(JSON.stringify(produtosAdmin));
  let valido = true;
  atualizados.forEach((produto) => {
    const check = document.querySelector(`[data-produto="${produto.id}"][data-tipo="disponivel"]`);
    produto.disponivel = check.checked;
    produto.precos.forEach((preco, indice) => {
      const input = document.querySelector(`[data-produto="${produto.id}"][data-preco="${indice}"]`);
      const valor = Number(input.value);
      if (!Number.isFinite(valor) || valor <= 0 || input.value === "") {
        valido = false;
        input.classList.add("is-invalid");
      } else {
        input.classList.remove("is-invalid");
        preco.valor = valor;
      }
    });
  });
  if (!valido) {
    alerta.className = "alert alert-danger";
    alerta.textContent = "Confira os preços: todos devem ser números maiores que zero.";
    return;
  }
  if (!salvarProdutos(atualizados)) {
    alerta.className = "alert alert-danger";
    alerta.textContent = "Não foi possível salvar no armazenamento deste navegador.";
    return;
  }
  produtosAdmin = atualizados;
  alerta.className = "alert alert-success";
  alerta.textContent = "Alterações salvas com sucesso.";
});
document.getElementById("restaurar").addEventListener("click", () => {
  if (!confirm("Restaurar preços e disponibilidade originais?")) return;
  produtosAdmin = restaurarProdutos();
  renderizarAdmin();
  const alerta = document.getElementById("alerta-admin");
  alerta.className = "alert alert-success";
  alerta.textContent = "Valores originais restaurados.";
});
