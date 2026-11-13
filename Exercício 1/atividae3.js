function calcularNota(nota) {
  if (nota >= 7.0) {
    return "APROVADO";
  } else if (nota >= 5.0) {
    return "RECUPERACAO";
  } else {
    return "REPROVADO";
  }
}


if (calcularNota(8.5) === "APROVADO") {
  console.log(" nota 8.5 passou (APROVADO).");
} else {
  console.log(" nota 8.5 falhou.");
}


if (calcularNota(6.0) === "RECUPERACAO") {
  console.log("nota 6.0 passou (RECUPERACAO).");
} else {
  console.log("nota 6.0 falhou.");
}


if (calcularNota(3.0) === "REPROVADO") {
  console.log("nota 3.0 passou (REPROVADO).");
} else {
  console.log("nota 3.0 falhou.");
}