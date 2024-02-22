const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const Register = async (req, res) => {
    const { username, password } = req.body;
  
    // simple validation
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "missing username or password!" });
    }
  
    try {
      //check for existing user
      const user = await User.findOne({ username });
  
      if (user) {
        return res
          .status(400)
          .json({ success: false, message: "user already existing!" });
      }
  
      //all good
      const hashedPassword = await argon2.hash(password);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();
  
      //tra ve token
      const accessToken = jwt.sign(
        { userId: newUser._id },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({ success: true, message: "user created successfully!", accessToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "internal server!" });
    }
  };

  const Login = async (req, res) => {
    const { username, password } = req.body;
  
    // simple validation
    if (!username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "missing username or password!" });
    }
  
    try {
      //check for existing user
      const user = await User.findOne({ username });
      if (!user)
        return res
          .status(400)
          .json({ success: false, message: "incorrect username or password!" });
  
      //username found
      const passwordValid = await argon2.verify(user.password, password); //so sanh 2 password
      if (!passwordValid)
        return res
          .status(400)
          .json({ success: false, message: "incorrect username or password!" });
  
      //all good
      //tra ve token
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET
      );
      res.json({ success: true, message: "user logged is successfully!", accessToken });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "internal server!" });
    }
  };

  module.exports = {Register, Login};