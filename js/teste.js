var teste = sessionStorage.getItem("teste")

const titulo = document.getElementById('nome_Form');
titulo.innerHTML = teste
var dadosFetch = ''
async function mostraPerguntas() {
    const requestOptions = {
      method: 'GET'
    };
  
    var dados = await fetch('/perguntas', requestOptions)
      .then((response) => response.json())
      .catch(error => console.log(error));
  
    dados.map((dado) => {
        if(dado.teste == teste){
            exibirPerguntas(dado)
            dadosFetch= dado.perguntas
        }
      });
  }

  mostraPerguntas()

  function exibirPerguntas(perguntas) {
    console.log(perguntas)
    
    const questionario = document.getElementById('teste');
    let html = '';
    
    perguntas.perguntas.map((teste, index) => {
        const pergunta = teste.pergunta;    
        html += `<div class="container"> <div class="card"><p>${teste.pergunta}</p>`;
        teste.opcoes.map(opcao => {
            const chave = Object.keys(opcao)[0];
            const valor = opcao[chave];
            html += `<label><input type="radio" name="${pergunta}" value="${valor}">${valor}</label><br>`;
        })
        html += `</div> </div>`;
    })

    questionario.innerHTML = html;
}


function verificarRespostas() {
  let acertos = 0;

  const perguntas = document.querySelectorAll('p');
  perguntas.forEach((pergunta) => {
      const respostas = document.getElementsByName(pergunta.textContent);
      respostas.forEach((resposta) => {
          if (resposta.checked) {
              const valorResposta = resposta.value;
              const perguntaCorreta = obterRespostaCorreta(valorResposta);
              if (perguntaCorreta === 'correta') {
                  acertos++;
              }
          }
      });
  });

  const objeto = {
    teste: teste,
    qtd_perguntas: dadosFetch.length ,
    qtd_acertos: acertos
    } ;

   const requestOptions = {
    method: 'POST',
    body: JSON.stringify(objeto),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  fetch('/submit-resultados', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
    window.location.replace('/resultados')

  console.log(acertos)
}



function obterRespostaCorreta(pergunta) {
  const perguntas = dadosFetch.map((dado) => dado.pergunta);
  for (let i = 0; i < perguntas.length; i++) {
    if (pergunta == dadosFetch[i].resposta) {
      return 'correta';
    }
  }
  return 'incorreto';
}

function telaHome(){
  window.location.replace("/");
}