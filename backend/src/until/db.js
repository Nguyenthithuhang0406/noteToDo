//db.js
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

async function connectDB() {
    await mongoose.connect(MONGO_URI);

    console.log("connect db ok");
}
module.exports = {connectDB};