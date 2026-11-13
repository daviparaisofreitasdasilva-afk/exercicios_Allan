const calcularTotal = (preco, cupom) => (cupom === "CIMATEC" ? preco - 10 : preco);

const subirDeNivel = (pontos) => (pontos >= 100 ? "NÍVEL 2" : "NÍVEL 1");


const verificarFreteGratis = (valor) => valor >= 150;


const validarSenha = (senha) => (senha.length >= 6 ? "OK" : "CURTA");


function calcularNota(nota) {
  if (nota >= 7.0) return "APROVADO";
  if (nota >= 5.0) return "RECUPERACAO";
  return "REPROVADO";
}


function verificarServidor(temp) {
  if (temp > 80) return "PERIGO";
  if (temp >= 50) return "ATENCAO";
  return "NORMAL";
}

module.exports = {
  calcularTotal,
  subirDeNivel,
  verificarFreteGratis,
  validarSenha,
  calcularNota,
  verificarServidor,
};