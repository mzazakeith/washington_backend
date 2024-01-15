const express = require("express");
const {getAllUsers, getUserById, createUser, updateUserById, deleteUserById} = require("../controllers/controllers.user");
const userRouter = express.Router()

userRouter.get('/api/users/get', getAllUsers);
userRouter.get('/api/user/get/:id', getUserById);
userRouter.post('/api/user/add', createUser);
userRouter.put('/api/user/update/:id', updateUserById);
userRouter.delete('/api/user/delete/:id', deleteUserById);

module.exports = userRouter
