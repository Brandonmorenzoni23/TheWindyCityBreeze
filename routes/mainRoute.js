const express = require("express")
const router = express.Router()
const mainController = require('../controllers/mainController')
const authController = require('../controllers/authController')
const { ensureAuth } = require("../middleware/auth")
const passport = require("passport")

//Main Routes
router.get("/", mainController.getMain)
router.get("/aboutus", mainController.getAboutUs)
router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin)
router.get("/logout", authController.getLogout)
router.get("/shop", mainController.getShop)
router.get("/content", mainController.getContent)
router.get("/signup", authController.getSignup)
router.post("/signup", authController.postSignup)
router.get("/cart", mainController.getCart)


module.exports = router;