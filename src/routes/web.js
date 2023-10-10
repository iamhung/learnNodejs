const express = require('express');
const router = express.Router();
const { getHomePage, getProductsPage, postCreateUser, } = require('../controllers/homeController')

router.get('/', getHomePage)

router.post('/create-user',postCreateUser)

router.get('/products',getProductsPage)

module.exports = router;