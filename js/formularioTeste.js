const formulario = document.querySelector('#form');
const lista = document.getElementById('minhaLista');

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
    sessionStorage.setItem("acessar_form", "T");
    location.reload();
});

const gerarMetodo = async () => {
    const requestOptions = {
        method: 'GET'
    };

    var dados = await fetch('/perguntas', requestOptions)
        .then((response) => response.json())
        .catch(error => console.log(error));
    dados = dados.sort(sortCrescente("teste"));
    dados.map((dado) => {
        let li = document.createElement("li");
        li.innerText = dado.teste;
        lista.appendChild(li);
    });
}

function sortCrescente(nome) {
    return function (a, b) {
        if (a[nome].toLowerCase() > b[nome].toLowerCase())
            return 1;
        else if (a[nome].toLowerCase() < b[nome].toLowerCase())
            return -1;

        return 0;
    }
}

function telaHome() {
    window.location.replace("/");
}

function telaFormulario() {
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
gerarMetodo();