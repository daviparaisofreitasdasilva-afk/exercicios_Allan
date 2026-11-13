function formatarCPF(cpf) {
  const cpfLimpo = cpf.replaceAll(".", "").replaceAll("-", "");

  
  const apenasNumeros11Digitos = /^\d{11}$/.test(cpfLimpo);

  if (!apenasNumeros11Digitos) {
    return "CPF_INVALIDO";
  }

  return cpfLimpo;
}


if (formatarCPF("123.456.789-00") === "12345678900") {
  console.log("Teste 1 passou: CPF limpo corretamente (12345678900).");
} else {
  console.log("Teste 1 falhou.");
}


if (formatarCPF("123.456.789-0") === "CPF_INVALIDO") {
  console.log("Teste 2 passou: Rejeitou CPF com tamanho incorreto (CPF_INVALIDO).");
} else {
  console.log("Teste 2 falhou.");
}


if (formatarCPF("123.456.78a-00") === "CPF_INVALIDO") {
  console.log("Teste 3 passou: Rejeitou CPF com letras (CPF_INVALIDO).");
} else {
  console.log("Teste 3 falhou.");
}