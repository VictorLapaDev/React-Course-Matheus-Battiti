const express = require("express");
const router = express.Router();

// Controller
const { register, login } = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidation");
const {
  userCreateValidation,
  loginValidate,
} = require("../middlewares/userValidation");

//Routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidate(), validate, login);

module.exports = router;
