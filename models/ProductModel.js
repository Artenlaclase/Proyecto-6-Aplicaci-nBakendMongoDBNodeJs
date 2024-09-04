const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    precio: {
        type: Number
    },
    descripcion: {
        type: String,
        required: true
    },
    imagen:{
        type: String
    }

},
    {
        timestamps: true
    }
)
const Product = mongoose.model('Product', productSchema)

module.exports = Product;
