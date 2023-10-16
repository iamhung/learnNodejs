const connection = require("../config/datatbase");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");
const db = require("../models/index");

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll();

      resolve(users);
    } catch (err) {
      reject(err);
    }
  });
};

const getUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: {
          id: userId,
        },
      });
      resolve(user || null);
    } catch (err) {
      reject(err);
    }
  });
};

const createNewUser = (firstName, lastName, email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.create({
        firstName,
        lastName,
        email,
      });

      resolve(user || null);
    } catch (err) {
      reject(err);
    }
  });
};

const updateUser = (userId, firstName, lastName, email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { id: userId },
        raw: false,
      });

      if (user) {
        user.firstName = firstName;
        user.lastName = lastName;
        user.email = email;

        await user.save();

        resolve(user);
      } else {
        resolve("invalid user id !!!");
      }
    } catch (err) {
      reject(err);
    }
  });
};

const deleteUser = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.destroy({
        where: {
          id: userId,
        },
      });

      resolve(user || null);
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  getUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
};
