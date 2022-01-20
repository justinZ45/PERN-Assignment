const express = require("express"); // import express
const compression = require("compression"); // import compression to reduce size of response
const bodyParser = require("body-parser"); // import body-parser to parse request body
const cors = require("cors"); // import cors to enable cross-origin resource sharing

const db = require("./db"); // import db.js

const app = express(); // create express app

app.use(compression()); // use compression middleware
app.use(bodyParser.json()); // use body-parser middleware to parse json
app.use(cors()); // use cors middleware to enable cross-origin resource sharing

app.use((err, req, res, next) => {
  // use middleware to log error
  res.status(err.status || 500); // set status to err.status or 500
  res.json({
    // send json response
    error: {
      // create error object
      message: err.message, // set message to err.message
    },
  });
}); // end use
app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

//app.get("/user/:id", db.getUser); // get user
app.post("/users", db.createUser); // create user endpoint
app.post("/login", db.loginUser); // login user endpoint


app.listen(6000, () => {
  // listen on port
  console.log("Server is running on port 6000"); // log message
});