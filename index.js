const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/html/login.html'));
});

router.get('/escolha', function(req, res) {
    res.sendFile(path.join(__dirname+'/html/escolha.html'));
});

app.use('/',router);
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('dados'));

app.listen(process.env.port || 3000);

console.log('Servidor ligado corretamente');