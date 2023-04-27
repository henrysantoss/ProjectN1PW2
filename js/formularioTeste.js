const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  const teste = document.querySelector('#teste').value;

  if (teste == "") {
    alert("Escreva um nome para o Teste!");
    return false;
  }
  const dadosDoFormulario = {
    teste: teste,
    "perguntas": []
  };
  console.log(dadosDoFormulario);

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(dadosDoFormulario),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  fetch('/submit-form-teste', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});

function telaHome(){
    window.location.replace("/");
  }
  
  function telaFormulario(){
    sessionStorage.setItem("acessar_form", "T");
    window.location.replace("/formulario");
  }

  function VerificaEntradaDireta() {
    var acessar = sessionStorage.getItem("acessar_form");
    if (acessar != "T") {
      window.location.replace("/");
    }
    sessionStorage.setItem("acessar_form", "F");
  }
  
  VerificaEntradaDireta();