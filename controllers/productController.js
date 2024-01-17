const passport = require("passport");
const product = require("../models/product");


// GET REQUEST
exports.getProduct = async (req, res) => {
  try {
    const products = await product.find();
    res.render("profile.ejs", {products: products});
  } catch (err) {
    console.log(err);
  }
  };


// POST REQUEST
exports.postProduct = async (req, res) => {
  await product.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
})
res.redirect("/shop");
}

// DELETE REQUEST
//exports.deleteProduct = async (req, res) {
  //await product.deleteOne()
//}