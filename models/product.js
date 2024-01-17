const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: '',
    },
    images: [{
        type: String,
    }],
    price: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        default: 0,
    }

})

module.exports = mongoose.model("Product", ProductSchema);