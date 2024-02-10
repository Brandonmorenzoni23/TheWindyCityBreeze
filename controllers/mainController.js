const passport = require("passport");
const user = require("../models/User");
const product = require("../models/product")


module.exports = {
    getMain: async (req, res) => {
      const users =  user.find({ user: req.user  })
      res.render("homepage.ejs", {users: users});
    },
    getShop: async (req, res) => {
      try {
        const products = product.find();
        res.render("shop.ejs", {products: products});
      } catch (err) {
        console.log(err);
      }
    },
    getContent: (req, res) => {
      res.render("content.ejs");
    },
    getCart: (req, res) => {
      res.render("cart.ejs");
    },
};