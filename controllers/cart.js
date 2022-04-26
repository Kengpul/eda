const Cart = require('../models/cart');
const Product = require('../models/product');

module.exports.index = async (req, res) => {
    const cart = await Cart.findOne({}).populate('products');
    res.render('cart/index', { cart });
}

module.exports.addToCart = async (req, res) => {
    const { id } = req.params;
    const addToCart = await Cart.findOne();
    try {
        await Product.findById(id);
    } catch {
        req.flash('error', 'Product does not exist');
        return res.redirect('/products')
    }
    const product = await Product.findById(id);
    if (!product) {
        req.flash('error', 'Product does not exist');
        return res.redirect('/products');
    }
    if (addToCart.products.indexOf(id) !== -1) {
        product.quantity++;
        await product.save();
        req.flash('success', 'Successfully added to the cart');
        return res.redirect(`/products`);
    }
    product.quantity = 1;
    addToCart.products.push(id);
    await product.save();
    await addToCart.save();
    req.flash('success', 'Successfully added to the cart');
    res.redirect(`/products`);
}

module.exports.removeToCart = async (req, res) => {
    const { id } = req.params;
    const cart = await Cart.findOne();
    if (cart.products.indexOf(id) === -1) {
        req.flash('error', 'product does not exist');
        return res.redirect('/cart');
    }
    cart.products.splice(cart.products.indexOf(id), 1);
    req.flash('success', 'Product successfully removed');
    await cart.save();
    res.redirect('/cart');
}

module.exports.increaseQuantity = async (req, res) => {
    const product = await Product.findById(req.params.id);
    product.quantity++;
    await product.save();
    res.redirect('/cart');
}

module.exports.decreaseQuantity = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product.quantity <= 1) {
        const cart = await Cart.findOne();
        cart.products.splice(cart.products.indexOf(product._id), 1);
        await cart.save();
        req.flash('error', 'Product Remove');
        return res.redirect('/cart');
    }
    product.quantity--;
    await product.save();
    res.redirect('/cart');
}