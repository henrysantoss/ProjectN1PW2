const gerarContainer = document.querySelector('.card-container');

const gerarMetodo = async () => {
    const requestOptions = {
      method: 'GET'
      };
  
      var dados = await fetch('/resultado-testes', requestOptions)
        .then((response) => response.json())
        .catch(error => console.log(error));
      dados.map((dado) => {
          console.log(dado);
          const elemento = document.createElement('div');
          elemento.classList.add('card');
          elemento.innerHTML = `
          <div class="teste-container">
              <div class="card_box">
                <div class="card_item">
                    <div class="card-item_bg"></div>
            
                    <div class="card-item_titulo">
                      ${dado.teste}
                    </div>
                </div>
              </div>
          </div>
          `
  
          gerarContainer.appendChild(elemento);
      });
  }

gerarMetodo();