const areasCategoria = {
  "Peixes": document.getElementById("produtos-peixes"),
  "Frutos do mar": document.getElementById("produtos-frutos-do-mar"),
  "Outros": document.getElementById("produtos-outros")
};

function criarCard(produto) {
  const card = document.createElement("div");
  card.className = "card-polaroid";
  if (produto.disponivel === false) card.classList.add("indisponivel");
  if (produto.selos.length || produto.disponivel === false) {
    const selos = document.createElement("div");
    selos.className = "selos";
    produto.selos.forEach((item) => {
      const selo = document.createElement("span");
      selo.className = `selo ${item.classe || ""}`.trim();
      selo.textContent = item.texto;
      selos.appendChild(selo);
    });
    if (produto.disponivel === false) {
      const selo = document.createElement("span");
      selo.className = "selo indisponivel";
      selo.textContent = "Indisponível hoje";
      selos.appendChild(selo);
    }
    card.appendChild(selos);
  }
  const imagem = document.createElement("img");
  imagem.src = produto.imagem;
  imagem.alt = produto.nome;
  card.appendChild(imagem);
  const nome = document.createElement("h3");
  nome.textContent = produto.nome;
  card.appendChild(nome);
  produto.precos.forEach((item) => {
    const preco = document.createElement("p");
    preco.className = "preco";
    const valor = Number(item.valor).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    preco.textContent = `${item.unidade}: ${item.rotulo ? `${item.rotulo}: ` : ""}R$ ${valor}`;
    card.appendChild(preco);
  });
  return card;
}

carregarProdutos().forEach((produto) => {
  if (areasCategoria[produto.categoria]) areasCategoria[produto.categoria].appendChild(criarCard(produto));
});
