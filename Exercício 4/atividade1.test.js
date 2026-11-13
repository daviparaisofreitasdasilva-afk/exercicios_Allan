const {
  calcularTotal,
  subirDeNivel,
  verificarFreteGratis,
  validarSenha,
  calcularNota,
  verificarServidor,
} = require("./atividade1");

describe("Atividade 1 - Lógica Básica e Condicionais", () => {
  describe("calcularTotal", () => {
    test("aplica desconto de R$ 10 quando o cupom é CIMATEC", () => {
      expect(calcularTotal(100, "CIMATEC")).toBe(90);
    });

    test("mantém o preço normal sem cupom válido", () => {
      expect(calcularTotal(100, "")).toBe(100);
    });
  });

  describe("subirDeNivel", () => {
    test("retorna NÍVEL 1 para menos de 100 pontos", () => {
      expect(subirDeNivel(50)).toBe("NÍVEL 1");
    });

    test("retorna NÍVEL 2 para 100 pontos ou mais", () => {
      expect(subirDeNivel(100)).toBe("NÍVEL 2");
      expect(subirDeNivel(150)).toBe("NÍVEL 2");
    });
  });

  describe("verificarFreteGratis", () => {
    test("retorna true para compras de R$ 150 ou mais", () => {
      expect(verificarFreteGratis(200)).toBe(true);
      expect(verificarFreteGratis(150)).toBe(true);
    });

    test("retorna false para compras abaixo de R$ 150", () => {
      expect(verificarFreteGratis(80)).toBe(false);
    });
  });

  describe("validarSenha", () => {
    test("retorna OK para senhas com 6 ou mais caracteres", () => {
      expect(validarSenha("senhasegura123")).toBe("OK");
      expect(validarSenha("abc123")).toBe("OK");
    });

    test("retorna CURTA para senhas com menos de 6 caracteres", () => {
      expect(validarSenha("123")).toBe("CURTA");
    });
  });

  describe("calcularNota", () => {
    test("classifica corretamente aprovado, recuperação e reprovado", () => {
      expect(calcularNota(8.5)).toBe("APROVADO");
      expect(calcularNota(6.0)).toBe("RECUPERACAO");
      expect(calcularNota(3.0)).toBe("REPROVADO");
    });
  });

  describe("verificarServidor", () => {
    test("emite os alertas NORMAL, ATENCAO e PERIGO conforme a temperatura", () => {
      expect(verificarServidor(35)).toBe("NORMAL");
      expect(verificarServidor(65)).toBe("ATENCAO");
      expect(verificarServidor(90)).toBe("PERIGO");
    });
  });
});