const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

//define as colunas do BD
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

ProductSchema.plugin(mongoosePaginate);

//registra um model (coluna) na aplicação
mongoose.model('Product', ProductSchema);