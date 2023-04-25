const gerarContainer = document.querySelector('.card-container');

const gerarMetodo = async () => {
    var dados = await fetch('dados.json')
        .then((response) => response.json()); 
    
    dados.map((dado) => {
        console.log(dado);
        const elemento = document.createElement('div');
        elemento.classList.add('card');
        elemento.innerHTML = `
        <div class="ag-format-container">
            <div class="ag-courses_box">
              <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                  <div class="ag-courses-item_bg"></div>
          
                  <div class="ag-courses-item_title">
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
gerarMetodo();