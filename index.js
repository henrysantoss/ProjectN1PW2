const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/home.html'));
});

router.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/login.html'));
});

router.get('/criar', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/criar.html'));
});

router.get('/formulario', function (req, res) {
  res.sendFile(path.join(__dirname + '/html/formulario.html'));
});

app.use('/', router);
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('dados'));
app.use(express.static('images'));

app.listen(process.env.port || 3000);

console.log('Servidor ligado corretamente');

const fs = require('fs');

app.use(express.json());

app.post('/submit-form', (req, res) => {
  const formData = req.body.novaPergunta;
  console.log(formData)
  let dados;
  try {
    dados = JSON.parse(fs.readFileSync('dados/dados.json'));
  } catch (err) {
    dados = {};
  }

  dados[req.body.id].perguntas.push(formData);
  fs.writeFile('dados/dados.json', JSON.stringify(dados), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Erro ao gravar os dados do formulário.');
    }
    console.log('JSON gravado com sucesso!');
    return res.status(200).json({
      message: 'Formulário enviado com sucesso!'
    });
  });
});

app.get('/combobox', (req, res) => {
  let dados;
  try {
    dados = JSON.parse(fs.readFileSync('dados/dados.json'));
  } catch (err) {
    dados = {};
  }
  console.log(dados)
  res.send(dados);
});

app.post('/fazer-login', (req, res) => {
  let dados;
  var logar = false;
  try {
    dados = JSON.parse(fs.readFileSync('dados/login.json'));
  } catch (err) {
    dados = {};
  }
  console.log(dados)
  dados.forEach(conta => {
    if (req.body.login == conta.usuario && req.body.senha == conta.senha) {
      logar = true;
    }
  });
  res.send(logar);
});