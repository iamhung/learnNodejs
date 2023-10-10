const express = require('express');
const router = express.Router();
const { getHomePage,getProductsPage, } = require('../controllers/homeController')

router.get('/', getHomePage)

router.get('/products',getProductsPage)

module.exports = router;