function calcularFrete(peso, uf) {
  if (peso <= 0) {
    return -1;
  }

  let valorFrete = 0;

  if (uf === "BA") {
    valorFrete = 10 + (2 * peso);
  } else {
    valorFrete = 25 + (5 * peso);
  }

  if (peso > 20) {
    valorFrete += 50; 
  }

  return valorFrete;
}


if (calcularFrete(0, "BA") === -1 && calcularFrete(-5, "SP") === -1) {
  console.log("passou: Retornou -1 para peso inválido.");
} else {
  console.log("falhou.");
}


if (calcularFrete(5, "BA") === 20) {
  console.log("passou: Frete BA calculado corretamente (R$ 20).");
} else {
  console.log("2 falhou.");
}


if (calcularFrete(4, "SP") === 45) {
  console.log("passou: Frete outros estados calculado corretamente (R$ 45).");
} else {
  console.log("falhou.");
}


if (calcularFrete(25, "BA") === 110) {
  console.log("passou: Sobretaxa aplicada corretamente (R$ 110).");
} else {
  console.log("falhou.");
}