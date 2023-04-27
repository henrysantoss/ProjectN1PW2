var teste = sessionStorage.getItem("teste")

const titulo = document.getElementById('nome_Form');
titulo.innerHTML = teste

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
        html += `<p>${teste.pergunta}</p>`;
        teste.opcoes.map(opcao => {
            const chave = Object.keys(opcao)[0];
            const valor = opcao[chave];
            html += `<label><input type="radio" name="${pergunta}" value="${valor}">${valor}</label><br>`;
        })

    })

    questionario.innerHTML = html;
}