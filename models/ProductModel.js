const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    precio: {
        type: Number 
    },
},
{
    timestamps: true
}
)
const Product = mongoose.model('Product', productSchema)

module.exports= Product
