const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const AuthenticationMiddleware = require("../middleware/auth")


router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId", AuthenticationMiddleware.authenticate, AuthenticationMiddleware.authorise, userController.getUserData)
router.post("/users/:userId/posts", AuthenticationMiddleware.authenticate, AuthenticationMiddleware.authorise, userController.postMessage)

router.put("/users/:userId", AuthenticationMiddleware.authenticate, AuthenticationMiddleware.authorise, userController.updateUser)
router.delete('/users/:userId', AuthenticationMiddleware.authenticate, AuthenticationMiddleware.authorise, userController.deleteUser)

module.exports = router;