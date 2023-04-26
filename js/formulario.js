/*/const formulario = document.querySelector('#form');

	formulario.addEventListener('submit', function(event) {
		event.preventDefault(); // Deixa os valores padrões
		const pergunta = document.querySelector('#pergunta').value; // Zaque
		const opcaoA = document.querySelector('#opcaoA').value; // Email@zaque
		const opcaoB = document.querySelector('#opcaoB').value; // Email@zaque
		const opcaoC = document.querySelector('#opcaoC').value; // Email@zaque
		const opcaoD = document.querySelector('#opcaoD').value; // Email@zaque
		const opcaoE = document.querySelector('#opcaoE').value; // Email@zaque
		const resposta = document.querySelector('#resposta').value; // Oi zaque
		const dadosDoFormulario = {
			pergunta: pergunta,
			opcaoA: opcaoA,
			opcaoB: opcaoB,
			opcaoC: opcaoC,
			opcaoD: opcaoD,
			opcaoE: opcaoE,
			resposta: resposta
		};
		console.log(dadosDoFormulario)

		const requestOptions = {
		  method: 'POST',
		  body: dadosDoFormulario
		};
		console.log(requestOptions)

		//

		fetch('/submit-form', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body:requestOptions
		  }) // ????
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.log(error));
		
		
		// console.log(dadosDoFormulario)
		// Ações que serão realizadas quando o formulário for enviado
	})
	*/
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
    opcaoA: opcaoA,
    opcaoB: opcaoB,
    opcaoC: opcaoC,
    opcaoD: opcaoD,
    opcaoE: opcaoE,
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
