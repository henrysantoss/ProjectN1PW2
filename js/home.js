const gerarContainer = document.querySelector('.card-container');

function sortCrescente(nome){  
  return function(a,b){  
     if(a[nome].toLowerCase() > b[nome].toLowerCase())  
        return 1;  
     else if(a[nome].toLowerCase() < b[nome].toLowerCase())  
        return -1;  
 
     return 0;  
  }  
}

function retornaCorCard() {
  const cores = [
    "bg-primary",
    "bg-success",
    "bg-warning",
    "bg-danger",
  ];
  var numero = Math.floor(Math.random() * 4);
  return cores[numero];
}

function acessarTeste(teste) {
  sessionStorage.setItem("teste", teste);
  window.location.replace("/teste");
}

const gerarMetodo = async () => {
    var dados = await fetch('dados.json')
        .then((response) => response.json()); 
    dados = dados.sort(sortCrescente("teste"));
    dados.map((dado) => {
        console.log(dado);
        const elemento = document.createElement('div');
        elemento.classList.add('card');
        elemento.innerHTML = `
        <div class="teste-container">
            <div class="card_box">
              <div class="card_item">
                <a href="#" class="card-item_link" onclick="acessarTeste('`+dado.teste+`')">
                  <div class="card-item_bg ${retornaCorCard()}"></div>
          
                  <div class="card-item_titulo">
                    ${dado.teste}
                  </div>
                </a>
              </div>
            </div>
        </div>
        `

        gerarContainer.appendChild(elemento);
    });
}

function telaLogin(){
  window.location.replace("/login");
}

gerarMetodo();