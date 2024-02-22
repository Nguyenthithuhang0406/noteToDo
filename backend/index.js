require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/until/db");
const { AuthRoute } = require("./src/routes/auth");
const {postRoute} = require("./src/routes/post");

const app = express();

// app.get("/", (req, res) => res.send("hello world!"));

app.use(express.json());
app.use("/api/auth", AuthRoute);
app.use("/api/posts", postRoute);

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running in port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err =>", err);
  });
