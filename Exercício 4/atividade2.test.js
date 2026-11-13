const {
  validarCadastro,
  calcularCarrinho,
  contarPorCategoria,
} = require("./atividade2");

describe("Atividade 2 - Objetos e Arrays", () => {
  describe("validarCadastro", () => {
    test("retorna CADASTRO_OK quando todos os dados atendem às regras", () => {
      const usuario = { nome: "Carlos", idade: 25, email: "carlos@email.com" };
      expect(validarCadastro(usuario)).toBe("CADASTRO_OK");
    });

    test("retorna DADOS_INVALIDOS para menor de idade, nome curto ou e-mail sem @", () => {
      expect(validarCadastro({ nome: "Ana", idade: 17, email: "ana@email.com" })).toBe("DADOS_INVALIDOS");
      expect(validarCadastro({ nome: "Bruno", idade: 30, email: "brunoemail.com" })).toBe("DADOS_INVALIDOS");
      expect(validarCadastro({ nome: "Li", idade: 22, email: "li@email.com" })).toBe("DADOS_INVALIDOS");
    });
  });

  describe("calcularCarrinho", () => {
    test("aplica 10% de desconto quando a soma ultrapassa R$ 100", () => {
      expect(calcularCarrinho([30, 50, 40])).toBe(108);
    });

    test("não aplica desconto quando a soma é menor ou igual a R$ 100", () => {
      expect(calcularCarrinho([25, 45])).toBe(70);
      expect(calcularCarrinho([50, 50])).toBe(100);
    });
  });

  describe("contarPorCategoria", () => {
    const estoque = [
      { nome: "TV", categoria: "eletronicos" },
      { nome: "Notebook", categoria: "eletronicos" },
      { nome: "Cadeira", categoria: "moveis" },
      { nome: "Camiseta", categoria: "vestuario" },
    ];

    test("retorna a quantidade exata de produtos da categoria buscada", () => {
      expect(contarPorCategoria(estoque, "eletronicos")).toBe(2);
      expect(contarPorCategoria(estoque, "moveis")).toBe(1);
    });

    test("retorna 0 quando a categoria não existe no estoque", () => {
      expect(contarPorCategoria(estoque, "alimentos")).toBe(0);
    });
  });
});