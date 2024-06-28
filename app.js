require("dotenv").config()
//const dotenv=require("dotenv").config
//dotenv.config()
const express = require("express");
const app = express();
const port = 5500;

const cors = require('cors')

//* db connection
//const dbConnection = require("./db/dbConfig");
const dbConnection = require ("./db/dbConfig.js")
app.use(cors())

//* user routes middleware file
const userRoutes = require("./routes/userRoute");

//* question routes middleware file
const questionRoute = require("./routes/questionRoute");
//* answers routes middleware file
const answerRoute = require("./routes/answerRoute");

//* authentication middleware file
const authMiddleware = require("./middleware/authMiddleware");



//* json middleware to extract json data
app.use(express.json());
console.log("test 2")
//* user routes middleware
app.use("/api/users", userRoutes);
//* questions routes middleware ??
app.use("/api/questions", authMiddleware, questionRoute);
//* Answers routes middleware ??
app.use("/api/answers", authMiddleware, answerRoute);



async function start() {
  try {
    console.log("object")
    const result = await dbConnection.execute("select 'test'");
    console.log(result)
    await app.listen(port);
    console.log("database connection established ");
    console.log(`listening on ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();