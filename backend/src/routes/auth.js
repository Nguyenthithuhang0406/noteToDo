
const express = require("express");
const AuthRoute = express.Router();

const {Register, Login, getUser} = require("../controler/auth");
const { verifyToken } = require("../middleware/auth");

//route GET api/auth
//Check if user is logged in
//access Public
AuthRoute.get('/', verifyToken, getUser);

//route POST api/auth/register
//desc Register user
//access public
AuthRoute.post("/register", Register);

//route POST api/auth/login
//desc login user
//access public
AuthRoute.post("/login", Login );

module.exports = {AuthRoute};

