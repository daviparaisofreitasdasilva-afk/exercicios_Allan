
function validarCadastro({ nome, idade, email }) {
  const cadastroValido = nome.length >= 3 && idade >= 18 && email.includes("@");
  return cadastroValido ? "CADASTRO_OK" : "DADOS_INVALIDOS";
}


function calcularCarrinho(precos) {
  const total = precos.reduce((acumulador, preco) => acumulador + preco, 0);
  return total > 100 ? total * 0.9 : total;
}


const contarPorCategoria = (produtos, categoriaBuscada) =>
  produtos.filter((produto) => produto.categoria === categoriaBuscada).length;

module.exports = {
  validarCadastro,
  calcularCarrinho,
  contarPorCategoria,
};