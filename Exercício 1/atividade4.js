function verificarServidor(temp) {
  if (temp > 80) {
    return "PERIGO";
  } else if (temp >= 50) {
    return "ATENCAO";
  } else {
    return "NORMAL";
  }
}


if (verificarServidor(35) === "NORMAL") {
  console.log("35°C passou ");
} else {
  console.log("35°C falhou.");
}


if (verificarServidor(65) === "ATENCAO") {
  console.log("65°C passou (ATENCAO).");
} else {
  console.log("65°C falhou.");
}


if (verificarServidor(90) === "PERIGO") {
  console.log("90°C passou (PERIGO).");
} else {
  console.log("90°C falhou.");
}