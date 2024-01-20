const express = require("express")
const router = express.Router()
const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')

router.get("/:id", productController.getProduct)
router.post("/", productController.postProduct)

module.exports = router;
