const CHAVE_PRODUTOS = "peixaria_produtos";

function carregarProdutos() {
  try {
    const salvo = localStorage.getItem(CHAVE_PRODUTOS);
    if (!salvo) {
      salvarProdutos(PRODUTOS_INICIAIS);
      return JSON.parse(JSON.stringify(PRODUTOS_INICIAIS));
    }
    const produtos = JSON.parse(salvo);
    if (!Array.isArray(produtos)) throw new Error("Formato de produtos inválido");
    return produtos;
  } catch (erro) {
    try { localStorage.removeItem(CHAVE_PRODUTOS); } catch (falha) { /* O navegador pode bloquear o armazenamento. */ }
    return JSON.parse(JSON.stringify(PRODUTOS_INICIAIS));
  }
}

function salvarProdutos(lista) {
  try {
    localStorage.setItem(CHAVE_PRODUTOS, JSON.stringify(lista));
    return true;
  } catch (erro) {
    return false;
  }
}

function restaurarProdutos() {
  const originais = JSON.parse(JSON.stringify(PRODUTOS_INICIAIS));
  salvarProdutos(originais);
  return originais;
}
