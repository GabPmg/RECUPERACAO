const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    photo: {
        type: String,  
        required: false
    }
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
