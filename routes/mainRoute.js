const express = require("express")
const router = express.Router()
const mainController = require('../controllers/mainController')
const authController = require('../controllers/authController')

//Main Routes
router.get("/", mainController.getMain)
router.get("/login", authController.getLogin)
router.post("/login", authController.postLogin)
router.get("/shop", mainController.getShop)
router.get("/content", mainController.getContent)
router.get("/signup", authController.getSignup)
router.post("/signup", authController.postSignup)


module.exports = router;