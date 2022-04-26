const mongoose = require('mongoose');
const Cart = require('../models/cart');

const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/edamamaTest'
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Creating a Cart');
});


const seedDb = async () => {
    await Cart.deleteMany({});
    const cart = new Cart({});
    await cart.save()
}

seedDb().then(() => {
    console.log('Successfully created a cart')
    mongoose.connection.close();
})