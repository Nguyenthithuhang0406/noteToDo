
const express = require("express");
const AuthRoute = express.Router();

const {Register, Login} = require("../controler/auth");

//route POST api/auth/register
//desc Register user
//access public
AuthRoute.post("/register", Register);

//route POST api/auth/login
//desc login user
//access public
AuthRoute.post("/login", Login );

module.exports = {AuthRoute};

