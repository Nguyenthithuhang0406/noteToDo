//MIDDLEWARE DUNG DE XAC THUC, BAO VE, NGAN CHAN nhu 1 bac bao ve
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({success: false, message: "access token not found!"});
    }
    
    try{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); //ket qua la object userId
        req.userId = decoded.userId; //gan lai vao req
        next();
    }catch(err){
        console.log(err);
        return res.status(403).json({success: false, message: "invalid token!"});
    }
};

module.exports = {verifyToken};