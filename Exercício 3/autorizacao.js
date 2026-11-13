function verificarAcesso(usuario, rota) {
  if (!usuario.ativo) {
    return "ACESSO_NEGADO";
  }

  if (rota === "/painel-admin") {
    if (usuario.papel === "ADMIN") {
      return "ACESSO_PERMITIDO";
    }
    return "ACESSO_NEGADO";
  }

  if (rota === "/relatorios") {
    if (usuario.papel === "ADMIN" || usuario.papel === "GERENTE") {
      return "ACESSO_PERMITIDO";
    }
    return "ACESSO_NEGADO";
  }

  return "ACESSO_PERMITIDO";
}

const adminAtivo = { nome: "Marcos", papel: "ADMIN", ativo: true };
const gerenteAtivo = { nome: "Juliana", papel: "GERENTE", ativo: true };
const comumAtivo = { nome: "Lucas", papel: "USUARIO", ativo: true };
const adminInativo = { nome: "Roberto", papel: "ADMIN", ativo: false };


if (verificarAcesso(adminInativo, "/home") === "ACESSO_NEGADO") {
  console.log("passou: Usuário inativo bloqueado (ACESSO_NEGADO).");
} else {
  console.log("falhou.");
}


if (verificarAcesso(adminAtivo, "/painel-admin") === "ACESSO_PERMITIDO") {
  console.log("passou: ADMIN liberado no painel admin.");
} else {
  console.log("falhou.");
}


if (
  verificarAcesso(gerenteAtivo, "/painel-admin") === "ACESSO_NEGADO" &&
  verificarAcesso(gerenteAtivo, "/relatorios") === "ACESSO_PERMITIDO"
) {
  console.log("passou: Regras de acesso do GERENTE validadas.");
} else {
  console.log("falhou.");
}


if (verificarAcesso(comumAtivo, "/home") === "ACESSO_PERMITIDO") {
  console.log("passou: Rota pública liberada para usuário ativo.");
} else {
  console.log("falhou.");
}