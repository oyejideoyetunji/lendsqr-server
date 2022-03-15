const { getAllUsers, getUserDetails } = require("./controller.users");
const usersRouter = require("express").Router();


usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserDetails);


module.exports = usersRouter
