async function entrar() {
    var login = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    const dadosDoFormulario = {
        login: login,
        senha: senha
    }

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(dadosDoFormulario),
        headers: {
            'Content-Type': 'application/json'
        }
    };

    var dado = await fetch('/fazer-login', requestOptions)
        .then(response => response.json())
        .catch(error => alert(error));
    if (dado.logar == 'T') {
        sessionStorage.setItem("acessar_form", "T");
        window.location.replace('/formTeste');
    } else {
        alert('Login/Senha inválidos');
    }
}