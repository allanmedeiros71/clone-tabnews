// O teste precisa de 2 parametros: uma descrição e uma função de callback
test("Teste numero 1", funcaoCallback);

function funcaoCallback() {
  console.log("Executando o teste 1");
}

// Outra forma de escrever a função de callback é usando uma função anônima
test("Teste numero 2", function () {
  console.log("Executando o teste 2");
});

// Usando arrow function
test("Teste numero 3", () => {
  console.log("Executando o teste 3");
});

// Exemplo de teste com expectativa
test("Soma de 2 + 2 deve ser igual a 4", () => {
  const resultado = 2 + 2;
  expect(resultado).toBe(4);
});
