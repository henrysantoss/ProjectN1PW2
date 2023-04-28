const gerarContainer = document.querySelector('.card-container');

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

const gerarMetodo = async () => {
    const requestOptions = {
      method: 'GET'
      };
  
      var dados = await fetch('/resultado-testes', requestOptions)
        .then((response) => response.json())
        .catch(error => console.log(error));
      dados = dados.map(item => ({
            ...item,
            porcentagem: item.qtd_acertos / item.qtd_perguntas * 100
          }));
          
      dados = dados.sort((a, b) => b.porcentagem - a.porcentagem);
      dados.map((dado) => {
          const elemento = document.createElement('div');
          elemento.classList.add('card');
          elemento.innerHTML = `
          <div class="teste-container">
              <div class="card_box">
                <div class="card_item">
                  <div class="card-item_link">
                    <div class="card-item_bg ${retornaCorCard()}"></div>
            
                    <div class="card-item_titulo">
                      Teste: ${dado.teste}
                    </div>
                    <div class="card-item_titulo">
                      Quantidade Respostas: ${dado.qtd_perguntas}
                    </div>
                    <div class="card-item_titulo">
                    Quantidade Acertos: ${dado.qtd_acertos}
                    </div>
                    <div class="card-item_titulo">
                      Porcentagem de Acertos: ${dado.porcentagem}%
                    </div>
                  </div>
                </div>
              </div>
          </div>
          `
  
          gerarContainer.appendChild(elemento);
      });
  }

  function telaHome(){
    window.location.replace("/");
  }

gerarMetodo();