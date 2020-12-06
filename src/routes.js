const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);


/*
routes.get('/', (req, res) =>{
    //req - parâmetro de requisição do backend
    //res - retorno da requisição
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://github.com/facebook/react-native'
    });
    
    res.send("Hello RocketSeat");
});
*/

module.exports = routes;