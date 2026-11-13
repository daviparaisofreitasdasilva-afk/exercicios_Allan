function calcularTotal(preco, cupom) {
  if (cupom === "CIMATEC") {
    return preco - 10;
  } else {
    return preco;
  }
}


const resultado1 = calcularTotal(100, "CIMATEC");
if (resultado1 === 90) {
  console.log(" Teste 1 passou: Desconto aplicado corretamente (R$ 90).");
} else {
  console.log(" Teste 1 falhou: Esperado 90, recebeu " + resultado1);
}


const resultado2 = calcularTotal(100, "");
if (resultado2 === 100) {
  console.log(" Teste 2 passou: Preço normal mantido (R$ 100).");
} else {
  console.log(" Teste 2 falhou: Esperado 100, recebeu " + resultado2);
}