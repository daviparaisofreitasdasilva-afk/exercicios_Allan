// autenticacao.js
function verificarSessao(token, tempoSegundos) {
  if (!token) return "TOKEN_AUSENTE";
  if (tempoSegundos <= 0) return "SESSAO_EXPIRADA";
  return "SESSAO_ATIVA";
}

// calculoFrete.js
function calcularFrete(peso, uf) {
  if (peso <= 0) return -1;

  const taxaBase = uf === "BA" ? 10 : 25;
  const valorPorKg = uf === "BA" ? 2 : 5;
  const sobretaxa = peso > 20 ? 50 : 0;

  return taxaBase + valorPorKg * peso + sobretaxa;
}

// formatador.js
function formatarCPF(cpf) {
  const cpfLimpo = cpf.replace(/[.-]/g, "");
  return /^\d{11}$/.test(cpfLimpo) ? cpfLimpo : "CPF_INVALIDO";
}

// autorizacao.js
function verificarAcesso({ ativo, papel }, rota) {
  if (!ativo) return "ACESSO_NEGADO";

  const permissoesPorRota = {
    "/painel-admin": ["ADMIN"],
    "/relatorios": ["ADMIN", "GERENTE"],
  };

  const perfisPermitidos = permissoesPorRota[rota];
  if (!perfisPermitidos) return "ACESSO_PERMITIDO";

  return perfisPermitidos.includes(papel) ? "ACESSO_PERMITIDO" : "ACESSO_NEGADO";
}

module.exports = {
  verificarSessao,
  calcularFrete,
  formatarCPF,
  verificarAcesso,
};