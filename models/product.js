const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    price: Number,
    quantity: Number,
    image: {
        url: String
    }
})

productSchema.virtual('showImage').get(function () {
    return this.image.url.replace('/200/200', '/500/500');
})

module.exports = mongoose.model('Product', productSchema);