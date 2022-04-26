const mongoose = require('mongoose');
const Product = require('../models/product');
const products = require('./products');


const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/edamamaTest'
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Generating products');
});

const seedDb = async () => {
    await Product.deleteMany({});
    for (let i = 0; i < 20; i++) {
        const randomPrice = Math.floor(Math.random() * 100);
        const randomProduct = Math.floor(Math.random() * products.length);
        const product = await new Product({
            name: products[randomProduct].name,
            price: randomPrice,
            image: {
                url: `https://picsum.photos/200/200?random=${i}`
            }
        })
        await product.save()
    }
}

seedDb().then(() => {
    console.log('Successfully generate products')
    mongoose.connection.close();
})