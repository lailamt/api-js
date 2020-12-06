const express = require("express");
//importa o express
const mongoose = require("mongoose");
//importa o mongoose
const requireDir = require("require-dir");
//cors é o que permite que outros domínios acessem a API
const cors = require("cors");

//iniciando o app
const app = express();
app.use(express.json());
//pode passar dentro do cors alguns parâmetros de controle 
//de domínios que tem permissão pra acessar a API
app.use(cors());

//iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser:true}
);
//conecta com o DB
require('./src/models');

//Rotas
//use recebe todos os parâmetros e 
//direciona as requisições
app.use('/api', require("./src/routes"));

app.listen(3001);
//ouvir a porta 3001 da rede
//executa a porta com:
//  node server.js
//acessa a porta com:
//  localhost:3001