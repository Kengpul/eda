const express = require('express');
const router = express.Router();
const product = require('../controllers/product');
const catchAsync = require('../utils/catchAsync');

router.get('/', catchAsync(product.index))

router.get('/:id', catchAsync(product.showProduct))

module.exports = router;