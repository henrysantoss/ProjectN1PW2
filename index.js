const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/html/home.html'));
});

router.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname+'/html/login.html'));
});

router.get('/criar', function(req, res) {
    res.sendFile(path.join(__dirname+'/html/criar.html'));
});

router.get('/formulario', function(req, res) {
    res.sendFile(path.join(__dirname+'/html/formulario.html'));
});

app.use('/',router);
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('dados'));
app.use(express.static('images'));

app.listen(process.env.port || 3000);

console.log('Servidor ligado corretamente');

const fs = require('fs');

// Configurar o body-parser para interpretar o corpo das solicitações como JSON
app.use(express.json());

// Manipulador de rota para o envio do formulário
app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log(formData)
  let dados;
  try {
    // Ler o conteúdo atual do arquivo "dados.json" e analisá-lo em um objeto JavaScript
    dados = JSON.parse(fs.readFileSync('dados.json'));
  } catch (err) {
    // Se o arquivo não existir ou não puder ser analisado, inicialize a variável dados com um objeto vazio
    dados = {};
  }

  // Adicionar os novos dados ao objeto JavaScript
  dados = {...dados, ...formData};

  // Escrever o objeto JavaScript de volta ao arquivo "dados.json"
  fs.writeFile('dados.json', JSON.stringify(dados), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erro ao gravar os dados do formulário.');
    }
    console.log('JSON gravado com sucesso!');
    return res.status(200).json({ message: 'Formulário enviado com sucesso!' });
  });
});

