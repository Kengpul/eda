const Product = require('../models/product');
const Cart = require('../models/cart');

module.exports.index = async (req, res) => {
    const cart = await Cart.findOne();
    if (req.query.search) {
        const searchProducts = await Product.find({});
        const query = req.query.search.toLowerCase();
        const products = searchProducts.filter(p => p.name.toLowerCase().includes(query));
        return res.render('product/index', { products, cart });
    }
    const products = await Product.find({});
    res.render('product/index', { products, cart });
}

module.exports.showProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            req.flash('error', 'Product does not exists');
            return res.redirect('/products');
        }
        const cart = await Cart.findOne();
        res.render('product/show', { product, cart });
    } catch {
        req.flash('error', 'Product does not exist');
        return res.redirect('/products');
    }
}