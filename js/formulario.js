
const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const id = document.querySelector('#select-opcoes').value;
  const pergunta = document.querySelector('#pergunta').value;
  const opcaoA = document.querySelector('#opcaoA').value;
  const opcaoB = document.querySelector('#opcaoB').value;
  const opcaoC = document.querySelector('#opcaoC').value;
  const opcaoD = document.querySelector('#opcaoD').value;
  const opcaoE = document.querySelector('#opcaoE').value;
  const resposta = document.querySelector('#resposta').value;
  console.log(id);
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
		}],
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
  console.log(requestOptions);

  fetch('/submit-form', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
});

async function PreencheCombobox() {
  const requestOptions = {
	method: 'GET'
  };

  var dados = await fetch('/combobox', requestOptions)
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

PreencheCombobox();