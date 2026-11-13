function verificarSessao(token, tempoSegundos) {
  if (token === null || token === undefined || token === "") {
    return "TOKEN_AUSENTE";
  }

  if (tempoSegundos <= 0) {
    return "SESSAO_EXPIRADA";
  }

  return "SESSAO_ATIVA";
}


if (verificarSessao("", 300) === "TOKEN_AUSENTE" && verificarSessao(null, 300) === "TOKEN_AUSENTE") {
  console.log("Identificou token ausente (TOKEN_AUSENTE).");
} else {
  console.log("falhou.");
}


if (verificarSessao("xyz987", 0) === "SESSAO_EXPIRADA" && verificarSessao("xyz987", -10) === "SESSAO_EXPIRADA") {
  console.log("Identificou sessão expirada (SESSAO_EXPIRADA).");
} else {
  console.log("falhou.");
}


if (verificarSessao("xyz987", 120) === "SESSAO_ATIVA") {
  console.log("Sessão válida (SESSAO_ATIVA).");
} else {
  console.log("falhou.");
}