const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

//Connection to MongoDB
const connect = require("./db");

//conncetion checking of database
connect.on("connected", () => {
  console.log("Connected to DataBase");
});

//json support in server
app.use(express.json());

// users router
app.use("/users", require("./routes/users"));

app.listen(PORT, console.log("server is running"));
