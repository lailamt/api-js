const express = require('express');
//importa o express
const mongoose = require('mongoose');
//importa o mongoose
const requireDir = require("require-dir");

//iniciando o app
const app = express();

//iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    {useNewUrlParser:true}
);
//conecta com o DB
require('./src/models');
const Product = mongoose.model('Product');

app.get('/', (req, res) =>{
    //req - parâmetro de requisição do backend
    //res - retorno da requisição
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });
    
    res.send("Hello RocketSeat");
});

app.listen(3001);
//ouvir a porta 3001 da rede
//executa a porta com:
//  node server.js
//acessa a porta com:
//  localhost:3001