const {
  verificarSessao,
  calcularFrete,
  formatarCPF,
  verificarAcesso,
} = require("./atividade3");

describe("Atividade 3 - Regras de Backend", () => {
  describe("verificarSessao", () => {
    test("retorna TOKEN_AUSENTE quando o token é vazio, null ou undefined", () => {
      expect(verificarSessao("", 300)).toBe("TOKEN_AUSENTE");
      expect(verificarSessao(null, 300)).toBe("TOKEN_AUSENTE");
      expect(verificarSessao(undefined, 300)).toBe("TOKEN_AUSENTE");
    });

    test("retorna SESSAO_EXPIRADA quando o tempo é menor ou igual a zero", () => {
      expect(verificarSessao("xyz987", 0)).toBe("SESSAO_EXPIRADA");
      expect(verificarSessao("xyz987", -10)).toBe("SESSAO_EXPIRADA");
    });

    test("retorna SESSAO_ATIVA quando o token é válido e há tempo restante", () => {
      expect(verificarSessao("xyz987", 120)).toBe("SESSAO_ATIVA");
    });
  });

  describe("calcularFrete", () => {
    test("retorna -1 para peso menor ou igual a zero", () => {
      expect(calcularFrete(0, "BA")).toBe(-1);
      expect(calcularFrete(-5, "SP")).toBe(-1);
    });

    test("calcula corretamente o frete para BA e outros estados até 20 kg", () => {
      expect(calcularFrete(5, "BA")).toBe(20);
      expect(calcularFrete(4, "SP")).toBe(45);
    });

    test("adiciona sobretaxa de R$ 50 para cargas acima de 20 kg", () => {
      expect(calcularFrete(25, "BA")).toBe(110);
    });
  });

  describe("formatarCPF", () => {
    test("remove pontos e traços de um CPF válido", () => {
      expect(formatarCPF("123.456.789-00")).toBe("12345678900");
    });

    test("retorna CPF_INVALIDO quando não há 11 dígitos ou existem letras", () => {
      expect(formatarCPF("123.456.789-0")).toBe("CPF_INVALIDO");
      expect(formatarCPF("123.456.78a-00")).toBe("CPF_INVALIDO");
    });
  });

  describe("verificarAcesso", () => {
    const adminAtivo = { nome: "Marcos", papel: "ADMIN", ativo: true };
    const gerenteAtivo = { nome: "Juliana", papel: "GERENTE", ativo: true };
    const comumAtivo = { nome: "Lucas", papel: "USUARIO", ativo: true };
    const adminInativo = { nome: "Roberto", papel: "ADMIN", ativo: false };

    test("bloqueia qualquer acesso de usuário inativo", () => {
      expect(verificarAcesso(adminInativo, "/home")).toBe("ACESSO_NEGADO");
      expect(verificarAcesso(adminInativo, "/painel-admin")).toBe("ACESSO_NEGADO");
    });

    test("aplica permissões corretas na rota /painel-admin", () => {
      expect(verificarAcesso(adminAtivo, "/painel-admin")).toBe("ACESSO_PERMITIDO");
      expect(verificarAcesso(gerenteAtivo, "/painel-admin")).toBe("ACESSO_NEGADO");
    });

    test("aplica permissões corretas na rota /relatorios", () => {
      expect(verificarAcesso(adminAtivo, "/relatorios")).toBe("ACESSO_PERMITIDO");
      expect(verificarAcesso(gerenteAtivo, "/relatorios")).toBe("ACESSO_PERMITIDO");
      expect(verificarAcesso(comumAtivo, "/relatorios")).toBe("ACESSO_NEGADO");
    });

    test("permite acesso a rotas públicas para usuários ativos", () => {
      expect(verificarAcesso(comumAtivo, "/home")).toBe("ACESSO_PERMITIDO");
    });
  });
});