// Estes valores são a base usada quando o navegador ainda não tem alterações salvas.
const PRODUTOS_INICIAIS = [
  { id: 1, nome: "Tilápia", categoria: "Peixes", imagem: "img/tilapia.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 30 }] },
  { id: 2, nome: "Salmão", categoria: "Peixes", imagem: "img/salmao.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 140 }] },
  { id: 3, nome: "Robalo", categoria: "Peixes", imagem: "img/robalo.jpg", disponivel: true, selos: [{ texto: "Grande", classe: "" }, { texto: "Médio", classe: "" }], precos: [{ rotulo: "Médio", unidade: "1Kg", valor: 80 }, { rotulo: "Grande", unidade: "1Kg", valor: 110 }] },
  { id: 4, nome: "Pescada", categoria: "Peixes", imagem: "img/pescada-branca.jpg", disponivel: true, selos: [{ texto: "Branca", classe: "branca" }, { texto: "Amarela", classe: "amarela" }], precos: [{ rotulo: "Branca", unidade: "1Kg", valor: 50 }, { rotulo: "Amarela", unidade: "1Kg", valor: 80 }] },
  { id: 5, nome: "Linguado", categoria: "Peixes", imagem: "img/linguado.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 75 }] },
  { id: 6, nome: "Sardinha", categoria: "Peixes", imagem: "img/sardinha.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 20 }] },
  { id: 7, nome: "Tainha", categoria: "Peixes", imagem: "img/tainha.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 35 }] },
  { id: 8, nome: "Anchova", categoria: "Peixes", imagem: "img/anchova.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 38 }] },
  { id: 9, nome: "Congrio Rosa", categoria: "Peixes", imagem: "img/congriorosa.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 65 }] },
  { id: 10, nome: "Truta", categoria: "Peixes", imagem: "img/truta.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 75 }] },
  { id: 11, nome: "Pintado", categoria: "Peixes", imagem: "img/pintado.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 70 }] },
  { id: 12, nome: "Pacu", categoria: "Peixes", imagem: "img/Pacu.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 35 }] },
  { id: 13, nome: "Camarão", categoria: "Frutos do mar", imagem: "img/camarao.jpg", disponivel: true, selos: [{ texto: "Branco", classe: "branco" }, { texto: "Rosa", classe: "rosa" }], precos: [{ rotulo: "", unidade: "1Kg", valor: 110 }] },
  { id: 14, nome: "Lagosta", categoria: "Frutos do mar", imagem: "img/lagosta.jpg", disponivel: true, selos: [{ texto: "Sob encomenda", classe: "encomenda" }], precos: [{ rotulo: "", unidade: "1Kg", valor: 120 }] },
  { id: 15, nome: "Lula", categoria: "Frutos do mar", imagem: "img/lula.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 30 }] },
  { id: 16, nome: "Polvo", categoria: "Frutos do mar", imagem: "img/polvo.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 110 }] },
  { id: 17, nome: "Mexilhão", categoria: "Frutos do mar", imagem: "img/mexilhao.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1/2 kg", valor: 35 }] },
  { id: 18, nome: "Carne de Siri", categoria: "Outros", imagem: "img/carne-de-siri.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1/2 kg", valor: 60 }] },
  { id: 19, nome: "Manjuba", categoria: "Outros", imagem: "img/manjuba.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 38 }] },
  { id: 20, nome: "Vôngole", categoria: "Outros", imagem: "img/vongole.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1/2 kg", valor: 35 }] },
  { id: 21, nome: "Cação", categoria: "Outros", imagem: "img/cacao.jpg", disponivel: true, selos: [], precos: [{ rotulo: "", unidade: "1Kg", valor: 58 }] }
];
