const Post = require("../model/Post");

const Create = async (req, res) => {
    const { title, description, url, status } = req.body; //lay du lieu
  
    //simple validation
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "title is required!" });
    }
  
    //truyen du lieu
    try {
      const newPost = new Post({
        title,
        description,
        url: url.startsWith("https://") ? url : `https://${url}`, //neu co https:// rui thi thui, con khong thi them vao
        status: status || "TO LEARN",
        user: req.userId, //gia su o co objectId nay tao ra post
      });
  
      await newPost.save();
  
      res.json({ success: true, message: "happy learning!", post: newPost });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "internal server!" });
    }
  };

  //lay ra post cua user
  const getPost = async (req, res) => {
    try{
      const posts = await Post.find({user: req.userId}).populate('user', ['username']); //populate de lay ra ca truongw user nhung lay moi username, khong lay password
      res.json({success: true, posts});
    }catch(err){
      console.error(error);
      res.status(500).json({ success: false, message: "internal server!" });
        }
  };

  //update post
  const updatePost = async (req, res) => {
    const {title, description, url, status } = req.body;

    //simple validation
    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "title is required!" });
    }
  
    //truyen du lieu
    try {
      let updatedPost = {
        title,
        description: description || '',
        url: (url.startsWith("https://") ? url : `https://${url}`) || '', //neu co https:// rui thi thui, con khong thi them vao
        status: status || 'TO LEARN'
      }

      const postUpdateCondition = {_id: req.params.id, user: req.userId} ; //dieu kien de update post , post do phai cua nguoi co id nhu req
      
      updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, {new: true}); //new:true la neu co cai moi thi update khong thi tra ve cai cu

      //user not authorized to update post or post not found
      if(!updatePost){
        return res.status(401).json({success: false, message: "post not found or user not authorized!" });
      }

      res.json({success: true, message: "update successfully!",post : updatedPost});
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "internal server!" });
    }
  };

  const deletePost = async (req, res) => {
    try{
      const postDeleteCondition = {_id: req.params.id, user: req.userId};

      const deletedPost = await Post.findOneAndDelete(postDeleteCondition);

      
      //user not authorized or post not found
      if(!deletedPost){
        return res.status(401).json({success: false, message: "post not found or user not authorized!" });
      }

      res.json({success: true, message: "delete successfully!", post: deletedPost});
    }catch(error){
      console.error(error);
      res.status(500).json({ success: false, message: "internal server!" });
    }
  }
  module.exports = {Create, getPost, updatePost, deletePost};