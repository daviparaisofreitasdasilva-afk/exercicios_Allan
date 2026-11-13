function subirDeNivel(pontos) {
  if (pontos >= 100) {
    return "NÍVEL 2";
  } else {
    return "NÍVEL 1";
  }
}


if (subirDeNivel(50) === "NÍVEL 1") {
  console.log(" Teste 50 pontos passou (NÍVEL 1).");
} else {
  console.log(" Teste 50 pontos falhou.");
}


if (subirDeNivel(100) === "NÍVEL 2") {
  console.log(" Teste 100 pontos passou (NÍVEL 2).");
} else {
  console.log(" Teste 100 pontos falhou.");
}


if (subirDeNivel(150) === "NÍVEL 2") {
  console.log(" Teste 150 pontos passou (NÍVEL 2).");
} else {
  console.log(" Teste 150 pontos falhou.");
}