const express = require("express")
const router = express.Router()
const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')

router.get("/", productController.getProduct)
router.post("/", productController.postProduct)
//router.delete("/:id", productController.deleteProduct)

module.exports = router;
