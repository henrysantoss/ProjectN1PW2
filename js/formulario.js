const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  const id = document.querySelector('#select-opcoes').value;

  if (id == "-1") {
    alert("Selecione um Teste!");
    return false;
  }

  const pergunta = document.querySelector('#pergunta').value;
  const opcaoA = document.querySelector('#opcaoA').value;
  const opcaoB = document.querySelector('#opcaoB').value;
  const opcaoC = document.querySelector('#opcaoC').value;
  const opcaoD = document.querySelector('#opcaoD').value;
  const opcaoE = document.querySelector('#opcaoE').value;
  const selectResposta = document.querySelector('#select-resposta').value;
  var resposta = "";
  if (selectResposta == 'A') {
    resposta = opcaoA;
  } else if (selectResposta == 'B') {
    resposta = opcaoB;
  } else if (selectResposta == 'C') {
    resposta = opcaoC;
  } else if (selectResposta == 'D') {
    resposta = opcaoD;
  } else if (selectResposta == 'E') {
    resposta = opcaoE;
  }
  console.log(resposta);
  const dadosDoFormulario = {
    id: id,
    novaPergunta: {
      pergunta: pergunta,
      opcoes: [{
          opcaoA: opcaoA,
        },
        {
          opcaoB: opcaoB,
        },
        {
          opcaoC: opcaoC,
        },
        {
          opcaoD: opcaoD,
        },
        {
          opcaoE: opcaoE,
        }
      ],
      resposta: resposta
    }
  };
  console.log(dadosDoFormulario);

  const requestOptions = {
    method: 'POST',
    body: JSON.stringify(dadosDoFormulario),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  fetch('/submit-form', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
  sessionStorage.setItem("acessar_form", "T");
  location.reload();
});

function sortCrescente(nome){  
  return function(a,b){  
     if(a[nome].toLowerCase() > b[nome].toLowerCase())  
        return 1;  
     else if(a[nome].toLowerCase() < b[nome].toLowerCase())  
        return -1;  
 
     return 0;  
  }  
}

async function PreencheCombobox() {
  const requestOptions = {
    method: 'GET'
  };

  var dados = await fetch('/perguntas', requestOptions)
    .then((response) => response.json())
    .catch(error => console.log(error));
  console.log(dados)

  const select = document.querySelector('#select-opcoes');
  var id = 0;
  dados.map((dado) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = dado.teste;
    select.appendChild(option);
    id++;
  });
}

function telaHome(){
  window.location.replace("/");
}

function telaFormTeste(){
  sessionStorage.setItem("acessar_form", "T");
  window.location.replace("/formTeste");
}

function VerificaEntradaDireta() {
  var acessar = sessionStorage.getItem("acessar_form");
  if (acessar != "T") {
    window.location.replace("/");
  }
  sessionStorage.setItem("acessar_form", "F");
}

VerificaEntradaDireta();
PreencheCombobox();