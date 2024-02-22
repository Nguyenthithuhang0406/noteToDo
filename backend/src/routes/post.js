const express = require("express");
const postRoute = express.Router();
const {verifyToken} = require("../middleware/auth");

const {Create, getPost, updatePost, deletePost} = require("../controler/post");

//route POST api/posts
//desc Create post
//access private

postRoute.post("/",verifyToken, Create); //nhet bao ve vao day

//route GET api/posts
//desc Get post
//access private

postRoute.get('/', verifyToken, getPost);

//route PUT api/posts
//desc Update post
//access private
postRoute.put('/:id',verifyToken, updatePost );

//route DELETE api/posts
//desc Delete post
//access private

postRoute.delete('/:id', verifyToken, deletePost);
module.exports = {postRoute};
