const connection = require('../config/datatbase');

const getHomePage = (req, res) => {
    return res.render('home.ejs')
}

const postCreateUser = (req, res) => {
    // console.log('----------', req.body);

    let email = req?.body?.email;
    let name = req?.body?.name;
    let city = req?.body?.city;

    connection.query(
        `  INSERT INTO 
        Users (email, name, city)
        VALUES (?, ?, ?) `,
        [email, name, city],
        function(err, results) {
            console.log('results ------------',results);

            if(results){
                res.send(' Create user success !!!')
            }else {
                res.send(' Create user fail !!!')
            }
        }
      );
}

const getProductsPage = (req, res) => {
    res.send('<h1> Products !!!</h1>')
}

module.exports = {
    getHomePage,
    getProductsPage,
    postCreateUser,
}