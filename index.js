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

router.get('/teste', function(req, res) {
    res.sendFile(path.join(__dirname+'/html/teste.html'));
});

app.use('/',router);
app.use(express.static('css'));
app.use(express.static('js'));
app.use(express.static('dados'));
app.use(express.static('images'));

app.listen(process.env.port || 3000);

console.log('Servidor ligado corretamente');