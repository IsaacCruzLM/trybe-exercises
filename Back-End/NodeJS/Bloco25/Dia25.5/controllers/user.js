const express = require('express');
const  {
    isValidUsername,
    isValidEmail,
    isValidPassword,} = require('../middlewares/validations');
const wrapper = require('../util/wrapper');


const INVALID_DATA = {
  status: 400,
  message: `invalid data`,
};

const RegisterUser = async (req, res, next) => {
  res.status(200).send({ "message": "user created" });
};

const LoginUser = async (req, res, next) => {
    res.status(200).send({ "token": "86567349784e" });
};

const router = express.Router({ mergeParams: true });

router.post('/register', 
    wrapper(isValidUsername),
    wrapper(isValidEmail),
    wrapper(isValidPassword),
    wrapper(RegisterUser),
);

router.post('/login', 
    wrapper(isValidEmail),
    wrapper(isValidPassword),
    wrapper(LoginUser),
);

module.exports = router;