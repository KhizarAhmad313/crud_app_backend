const userModel = require("../models/users");

//get all users data
exports.getAllUsers = async (req, res) => {
  try {
    res.json(await userModel.find());
  } catch (error) {
    res.send("No User Found");
  }
};

//get single user data
exports.getUser = async (req, res) => {
  try {
    res.json(await userModel.find({ _id: req.params.userId }));
  } catch (err) {
    res.send(`<h1>User Not Found For The User ID: ${req.params.userId}</h1>`);
  }
};

//save the data to database
exports.saveUser = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    res.send(await newUser.save());
  } catch (err) {
    res.send(err);
  }
};

//update user data in database
exports.updateUser = async (req, res) => {
  try {
    const data = await userModel.findOneAndUpdate(
      { _id: req.params.userId },
      req.body,
      {
        new: true,
      }
    );
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};

//delete user from database
exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findOneAndDelete({
      _id: req.params.userId,
    });
    res.send(deletedUser ? deletedUser : "User Not Found In The DataBase");
  } catch (err) {
    res.send(err);
  }
};
