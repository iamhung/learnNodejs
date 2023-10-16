const {
  getUsers,
  getUser,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../services/CRUDService");

const getAllUsers = async (req, res) => {
  let users = await getUsers();

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(409).json("Users not Found !!!");
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  let user = await getUser(userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(409).json("Users not Found !!!");
  }
};

const postCreateNewUser = async (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let email = req.body.email;

  let newUser = await createNewUser(firstName, lastName, email);

  if (newUser) {
    res.status(200).json(newUser);
  } else {
    res.status(409).json("create new user fail !!!");
  }
};

const postUpdateUser = async (req, res) => {
  let userId = req?.params?.id;
  let firstName = req?.body?.firstName;
  let lastName = req?.body?.lastName;
  let email = req?.body?.email;

  let user = await updateUser(userId, firstName, lastName, email);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(409).json("User not Found !!!");
  }
};

const deleteUserById = async (req, res) => {
  let userId = req?.params?.id;

  let user = await deleteUser(userId);

  if (user) {
    res.status(200).json("delete success");
  } else {
    res.status(409).json("User not Found !!!");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  postCreateNewUser,
  postUpdateUser,
  deleteUserById,
};
