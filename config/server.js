var express = require('express');
var consign = require('consign');

var app = express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views', './app/views')

consign()
.include('app/routes')
.then('config/dbConnection.js')
.then('app/models')
.into(app) // Apontando para as rotas das views
//Consing reconhece os arquivos da pasta routes, faz um scan na aplicação
//pega os modulos e inclui no servidor.
module.exports = app;
