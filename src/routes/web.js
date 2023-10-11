const express = require("express");
const router = express.Router();
const {
  getHomePage,
  postCreateUser,
  getCreateUsers,
  postUpdateUser,
  getUpdateUsers,
  deleteUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/update/:id", getUpdateUsers);

router.get("/create", getCreateUsers);

router.post("/create-user", postCreateUser);

router.post("/update-user/:id", postUpdateUser);

router.post("/delete-user/:id", deleteUser);

module.exports = router;
