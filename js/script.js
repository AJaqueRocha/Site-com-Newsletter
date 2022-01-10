document.getElementById("BotaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" &&
     document.getElementById("email").value != ""){
    alert("Eba! Agora você já faz parte do nosso grupo!")
  }else{
    alert("Ah, falta alguma coisa... digite seu nome, seu e-mail e clique em Enviar!")
  }
}