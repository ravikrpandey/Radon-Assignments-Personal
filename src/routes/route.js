const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const AuthMiddleware= require("../middleware/auth")


router.post("/users", userController.createaUser  )

router.post("/login", AuthMiddleware.authLoginUser,userController.loginUser)

router.get("/users/:userId", AuthMiddleware.authToken,userController.getUserData)

router.put("/users/:userId",AuthMiddleware.authToken,userController.updateUser)

 router.delete("/users/:userId",AuthMiddleware.authToken,userController.deleteUser)


module.exports = router;