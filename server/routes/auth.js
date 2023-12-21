const { Router } = require("express");
const { register, login } = require("../controllers/auth");
const router = Router();
const validator = require("express-joi-validation").createValidator({});
const Joi = require("joi");

const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(15).required(),
  email: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(15).required(),
  email: Joi.string().email().required(),
});

router.post("/register", validator.body(registerSchema), register);

router.post("/login", validator.body(loginSchema), login);

module.exports = router;
