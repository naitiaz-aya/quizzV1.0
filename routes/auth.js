const router = require("express").Router()
const authController = require('../controllers/auth')

// >==============================<register user  "auth/register">==============================<
router.post("/register", authController.register)

// >==============================<login user "auth/login">==============================<
router.post("/login", authController.login)

// >==============================<logout user "auth/logout">==============================<
router.get("/logout", authController.logout)


module.exports = router 