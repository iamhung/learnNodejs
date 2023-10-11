const connection = require('../config/datatbase');
const { getAllUsers, getUserById, updateUserById, deleteUserById, } = require('../services/CRUDService')

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    // console.log('results ------',results);
    return res.render('home.ejs',{listUsers: results})
}

const getUpdateUsers = async (req, res) => {
    const userId = req.params.id
    // console.log('id -----', req.params, userId)

    let user = await getUserById(userId);

    return res.render('updateUser.ejs',{userUpdate : user})
}

const getCreateUsers = (req, res) => {
    return res.render('createUser.ejs')
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

const postUpdateUser = async (req, res) => {

    let userId = req?.params?.id;
    let email = req?.body?.email;
    let name = req?.body?.name;
    let city = req?.body?.city;

    // console.log('----------', req.params);

    await updateUserById(email,city,name,userId)

    res.send(' Create user success !!!')
}

const deleteUser = async (req, res) => {

    let userId = req?.params?.id;

    console.log('----------', req.params);

    await deleteUserById(userId)

    res.send(' Delete user success !!!')
}

module.exports = {
    getHomePage,
    postCreateUser,
    getCreateUsers,
    getUpdateUsers,
    postUpdateUser,
    deleteUser,
}