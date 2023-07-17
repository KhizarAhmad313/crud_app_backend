const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/users_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
});

module.exports = mongoose.connection;
