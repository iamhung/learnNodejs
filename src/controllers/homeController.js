const connection = require('../config/datatbase');

const getHomePage = (req, res) => {

    let users = [];

    connection.query(
        'SELECT * FROM Users',
        function ( err, results, fields) {
            users = results;

            console.log('check users ----', users)

            res.send(JSON.stringify(users))
        }
    );


}

const getProductsPage = (req, res) => {
    res.send('<h1> Products !!!</h1>')
}

module.exports = {
    getHomePage,
    getProductsPage
}