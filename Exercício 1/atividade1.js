function verificarFreteGratis(valor) {
  if (valor >= 150) {
    return true;
  } else {
    return false;
  }
}


if (verificarFreteGratis(200) === true) {
  console.log(" Passou (true).");
} else {
  console.log(" Falhou.");
}


if (verificarFreteGratis(80) === false) {
  console.log(" Passou (false).");
} else {
  console.log(" Falhou.");
}


if (verificarFreteGratis(150) === true) {
  console.log(" Passou (true).");
} else {
  console.log(" Falhou.");
}