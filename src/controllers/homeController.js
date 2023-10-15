const connection = require('../config/datatbase');
const { getAllUsers, getUserById, updateUserById, deleteUserById, } = require('../services/CRUDService')
const db = require('../models/index') ;

const getHomePage = async (req, res) => {
    try {
        // console.log('success')
        let data = await db.User.findAll();
        res.status(200).json(data)

        // return res.render('home.ejs',{listUsers: data})
    } catch(err) {
        console.log(err)
    }
    // let results = await getAllUsers();
    // // console.log('results ------',results);

    // res.status(200).json(data)
    // return res.render('home.ejs',{listUsers: results})

}

const getUpdateUsers = async (req, res) => {
    // const userId = req.params.id
    // console.log('id -----', req.params, userId)

    // let user = await getUserById(userId);
    try {
        // console.log('success')
        let user = await db.User.findOne({
            where: {
                id: req.params.id
             }
        });
        if(user) {
            res.status(200).json(user)
        }else {
            res.status(409).json('invalid user id !!!')
        }
    } catch(err) {
        console.log(err)
    }

    // res.status(200).json(user)
    // return res.render('updateUser.ejs',{userUpdate : user})
}

const getCreateUsers = (req, res) => {
    return res.render('createUser.ejs')
}

const postCreateUser = async (req, res) => {
    // console.log('----------', req.body);
    
    try {
        // console.log('success')
        await db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
          });

        return res.status(200).json('create success !!!')

        // return res.render('home.ejs',{listUsers: data})
    } catch(err) {
        console.log(err)
    }
    

    // console.log('create -------------')

    // connection.query(
    //     `  INSERT INTO 
    //     Users (email, name, city)
    //     VALUES (?, ?, ?) `,
    //     [email, name, city],
    //     function(err, results) {
    //         // console.log('results ------------',results);

    //         if(results){
    //             // res.status(200).json(req.body)
    //             res.status(200).json(' Create user success !!!')
    //         }else {
    //             res.status(409).json('error')
    //             // res.send(' Create user fail !!!')
    //         }
    //     }
    //   );
}

const postUpdateUser = async (req, res) => {

    // let userId = req?.params?.id;
    // let email = req?.body?.email;
    // let name = req?.body?.name;
    // let city = req?.body?.city;

    // console.log('----------', req.params);


    try {
        // console.log('success')
        let user = await db.User.findOne({
            where: {id: req.params.id}, raw: false
        })


        if(user){
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            
            await user.save();

            res.status(200).json('update success !!!')
        }else {
            res.status(409).json('update fail !!!')
        }
        // return res.render('home.ejs',{listUsers: data})
    } catch(err) {
        console.log(err)
    }

    // const results = await updateUserById(email,city,name,userId)

    // if(results){
    //     // res.status(200).json(req.body)
    //     res.status(200).json(' Update user success !!!')
    // }else {
    //     res.status(409).json('error')
    //     // res.send(' Create user fail !!!')
    // }

    // res.redirect('/')
}

const deleteUser = async (req, res) => {

    let userId = req?.params?.id;

    try {
        // console.log('success')
        await db.User.destroy({
            where: {
                id: userId
            }
        });
        return res.status(200).json(`delete user with id: ${userId} success !!!`)

    } catch(err) {
        console.log(err)
    }

    // console.log('----------', req.params);

    // const results = await deleteUserById(userId)

    // if(results){
    //     // res.status(200).json(req.body)
    //     res.status(200).json(' Delete user success !!!')
    // }else {
    //     res.status(409).json('error')
    //     // res.send(' Create user fail !!!')
    // }

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