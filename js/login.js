function entrar(){
    var login = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;
    fetch('login.json')
        .then((response) => response.json())
        .then((json) => {
            var logar = false;
            json.forEach(conta => {
                if (login == conta.usuario && senha == conta.senha) {
                    logar = true;
                    window.location.replace("/formulario");
                }
            });

            if (!logar) {
                throw new Error("Login ou Senha incorretos");
            }
    }).catch((error) => {
        alert(error);
    }); 
}