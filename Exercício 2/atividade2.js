function calcularCarrinho(precos) {
  let total = 0;

  for (let i = 0; i < precos.length; i++) {
    total += precos[i];
  }

  if (total > 100) {
    total = total * 0.9; 
  }

  return total;
}


if (calcularCarrinho([30, 50, 40]) === 108) {
  console.log("passou: Desconto aplicado (R$ 108).");
} else {
  console.log("falhou.");
}


if (calcularCarrinho([25, 45]) === 70) {
  console.log("passou: Valor normal mantido (R$ 70).");
} else {
  console.log("falhou.");
}


if (calcularCarrinho([50, 50]) === 100) {
  console.log("passou: Limite exato sem desconto (R$ 100).");
} else {
  console.log("falhou.");
}