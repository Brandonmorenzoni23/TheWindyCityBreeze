const express = require("express")
const router = express.Router()
const mainController = require('../controllers/mainController')
const authController = require('../controllers/authController')

//Main Routes
router.get("/", mainController.getMain)
router.get("/login", authController.getLogin)
router.get("/shop", mainController.getShop)
router.get("/content", mainController.getContent)



module.exports = router;