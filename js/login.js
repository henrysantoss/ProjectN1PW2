function entrar() {
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

    fetch('/fazer-login', requestOptions)
        .then(response => {
            if (response) {
                window.location.replace("/formulario"); 
            } else {
                throw new Error("Login ou Senha incorretos");
            }
        })
        .catch(error => alert(error));
}