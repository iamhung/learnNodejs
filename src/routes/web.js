const express = require("express");
const router = express.Router();
const {
  getHomePage,
  postCreateUser,
  getCreateUsers,
  getUpdateUsers,
  deleteUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/update/:id", getUpdateUsers);

router.get("/create", getCreateUsers);

router.post("/create-user", postCreateUser);

router.post("/update-user/:id", getHomePage);

router.post("/delete-user/:id", deleteUser);

module.exports = router;
