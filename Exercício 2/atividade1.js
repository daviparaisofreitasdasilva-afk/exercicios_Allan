function validarCadastro(usuario) {
  const nomeValido = usuario.nome.length >= 3;
  const idadeValida = usuario.idade >= 18;
  const emailValido = usuario.email.includes("@");

  if (nomeValido && idadeValida && emailValido) {
    return "CADASTRO_OK";
  } else {
    return "DADOS_INVALIDOS";
  }
}


const userValido = { nome: "Carlos", idade: 25, email: "carlos@email.com" };
if (validarCadastro(userValido) === "CADASTRO_OK") {
  console.log("Teste 1 passou (CADASTRO_OK).");
} else {
  console.log("Teste 1 falhou.");
}


const userMenor = { nome: "Ana", idade: 17, email: "ana@email.com" };
if (validarCadastro(userMenor) === "DADOS_INVALIDOS") {
  console.log("Teste 2 passou:menor de idade (DADOS_INVALIDOS).");
} else {
  console.log("Teste 2 falhou.");
}


const userSemArroba = { nome: "Bruno", idade: 30, email: "brunoemail.com" };
if (validarCadastro(userSemArroba) === "DADOS_INVALIDOS") {
  console.log("Teste 3 passou:e-mail inválido (DADOS_INVALIDOS).");
} else {
  console.log("Teste 3 falhou.");
}


const userNomeCurto = { nome: "Li", idade: 22, email: "li@email.com" };
if (validarCadastro(userNomeCurto) === "DADOS_INVALIDOS") {
  console.log("Teste 4 passou:nome curto (DADOS_INVALIDOS).");
} else {
  console.log("Teste 4 falhou.");
}