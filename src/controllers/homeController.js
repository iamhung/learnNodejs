const connection = require('../config/datatbase');
const { getAllUsers, getUserById, updateUserById, deleteUserById, } = require('../services/CRUDService')
const db = require('../models/index') ;


const getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        console.log(data)

        return res.render('home.ejs',{listUsers: data})
    } catch(err) {
        console.log(err)
    }
    // let results = await getAllUsers();
    // // console.log('results ------',results);

    // res.status(200).json(data)
    // return res.render('home.ejs',{listUsers: results})

}

const getUpdateUsers = async (req, res) => {
    const userId = req.params.id
    // console.log('id -----', req.params, userId)

    let user = await getUserById(userId);

    res.status(200).json(user)
    // return res.render('updateUser.ejs',{userUpdate : user})
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
            // console.log('results ------------',results);

            if(results){
                // res.status(200).json(req.body)
                res.status(200).json(' Create user success !!!')
            }else {
                res.status(409).json('error')
                // res.send(' Create user fail !!!')
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

    const results = await updateUserById(email,city,name,userId)

    if(results){
        // res.status(200).json(req.body)
        res.status(200).json(' Update user success !!!')
    }else {
        res.status(409).json('error')
        // res.send(' Create user fail !!!')
    }

    // res.redirect('/')
}

const deleteUser = async (req, res) => {

    let userId = req?.params?.id;

    // console.log('----------', req.params);

    const results = await deleteUserById(userId)

    if(results){
        // res.status(200).json(req.body)
        res.status(200).json(' Delete user success !!!')
    }else {
        res.status(409).json('error')
        // res.send(' Create user fail !!!')
    }

    // res.redirect('/')
}

module.exports = {
    getHomePage,
    postCreateUser,
    getCreateUsers,
    getUpdateUsers,
    postUpdateUser,
    deleteUser,
}