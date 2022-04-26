const express = require('express');
const router = express.Router();
const cart = require('../controllers/cart');
const catchAsync = require('../utils/catchAsync');

router.get('/', catchAsync(cart.index))

router.get('/:id', catchAsync(cart.addToCart))

router.post('/:id/increase', catchAsync(cart.increaseQuantity))

router.post('/:id/decrease', catchAsync(cart.decreaseQuantity))

router.delete('/:id/delete', catchAsync(cart.removeToCart))

module.exports = router;