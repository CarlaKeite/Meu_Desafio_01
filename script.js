function mostrarMensagem() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const comida = document.getElementById("comida").value;

  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos e minha comida favorita é ${comida}.`;
  
  document.getElementById("resultado").textContent = mensagem;
}
