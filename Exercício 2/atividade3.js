function contarPorCategoria(produtos, categoriaBuscada) {
  let quantidade = 0;

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].categoria === categoriaBuscada) {
      quantidade++;
    }
  }

  return quantidade;
}

const estoque = [
  { nome: "TV", categoria: "eletronicos" },
  { nome: "Notebook", categoria: "eletronicos" },
  { nome: "Cadeira", categoria: "moveis" },
  { nome: "Camiseta", categoria: "vestuario" }
];


if (contarPorCategoria(estoque, "eletronicos") === 2) {
  console.log("passou: Encontrou 2 eletrônicos.");
} else {
  console.log("falhou.");
}


if (contarPorCategoria(estoque, "moveis") === 1) {
  console.log("passou: Encontrou 1 móvel.");
} else {
  console.log("falhou.");
}


if (contarPorCategoria(estoque, "alimentos") === 0) {
  console.log("passou: Retornou 0 para categoria ausente.");
} else {
  console.log("falhou.");
}