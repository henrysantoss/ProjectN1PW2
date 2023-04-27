const xhr = new XMLHttpRequest();
xhr.open('GET', 'dados/dados.json');
xhr.onload = () => {
    if (xhr.status === 200) {
        const perguntas = JSON.parse(xhr.responseText);
        exibirPerguntas(perguntas);
    }
};
xhr.send();

function exibirPerguntas(perguntas) {
    const questionario = document.getElementById('questionario');
    let html = '';
    perguntas.forEach(teste => {
        html += `<h2>${teste.teste}</h2>`;
        teste.perguntas.forEach(pergunta => {
            html += `<p>${pergunta.pergunta}</p>`;
            pergunta.opcoes.forEach(opcao => {
                const chave = Object.keys(opcao)[0];
                const valor = opcao[chave];
                html += `<label><input type="radio" name="${pergunta.pergunta}" value="${valor}">${valor}</label><br>`;
            });
        });
    });
    questionario.innerHTML = html;
}

const enviar = document.getElementById('enviar');
enviar.addEventListener('click', () => {
    const respostas = document.querySelectorAll('input[type="radio"]:checked');
    let pontuacao = 0;
    respostas.forEach(resposta => {
        const pergunta = resposta.getAttribute('name');
        const valor = resposta.value;
        perguntas.forEach(teste => {
            teste.perguntas.forEach(perguntaJSON => {
                if (perguntaJSON.pergunta === pergunta && perguntaJSON.resposta === valor) {
                    pontuacao++;
                }
            });
        });
    });
    alert(`Sua pontuação é: ${pontuacao} de ${perguntas.length}`);
});
