const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users");

//Get All Users Data
router.get("/getAllUsers", UsersController.getAllUsers);

//Get Single User Data
router.get("/getUser/:userId", UsersController.getUser);

//Save User Data
router.post("/saveUser", UsersController.saveUser);

//Update User Data
router.patch("/updateUser/:userId", UsersController.updateUser);

//Delete User Data
router.delete("/deleteUser/:userId", UsersController.deleteUser);

module.exports = router;
