const formulario = document.querySelector('#form');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();
  const pergunta = document.querySelector('#pergunta').value;
  const opcaoA = document.querySelector('#opcaoA').value;
  const opcaoB = document.querySelector('#opcaoB').value;
  const opcaoC = document.querySelector('#opcaoC').value;
  const opcaoD = document.querySelector('#opcaoD').value;
  const opcaoE = document.querySelector('#opcaoE').value;
  const resposta = document.querySelector('#resposta').value;
  const dadosDoFormulario = {
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
