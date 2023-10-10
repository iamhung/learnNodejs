
const getHomePage = (req, res) => {
    res.send('<h1> Home !!!</h1>')
}

const getProductsPage = (req, res) => {
    res.send('<h1> Products !!!</h1>')
}

module.exports = {
    getHomePage,
    getProductsPage
}