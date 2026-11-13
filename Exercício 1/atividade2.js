function validarSenha(senha) {
  if (senha.length >= 6) {
    return "OK";
  } else {
    return "CURTA";
  }
}


if (validarSenha("senhasegura123") === "OK") {
  console.log(" passou (OK).");
} else {
  console.log("  falhou.");
}


if (validarSenha("123") === "CURTA") {
  console.log(" passou ");
} else {
  console.log(" falhou.");
}


if (validarSenha("abc123") === "OK") {
  console.log(" Foi (OK).");
} else {
  console.log(" N foi.");
} 