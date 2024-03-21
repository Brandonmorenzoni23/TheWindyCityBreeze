const passport = require("passport");
const user = require("../models/user");
const product = require("../models/product")


module.exports = {
    getMain: async (req, res) => {
      console.log(req.user)
      const users = req.user ? req.user:''
      res.render("homepage.ejs", {users: users});
    },
    getShop: async (req, res) => {
      try {
        const users =  user.find({ user: req.user  })
        const products = product.find();
        res.render("shop.ejs", {products: products, users: users});
      } catch (err) {
        console.log(err);
      }
    },
    getContent: (req, res) => {
      const users = req.user ? req.user:''
      res.render("content.ejs", {users: users});
    },
    getCart: (req, res) => {
      const users = req.user ? req.user:''
      res.render("cart.ejs", {users: users});
    },
    getProfile: (req, res) => {
      const users = req.user ? req.user:''
      res.render("profile.ejs", {users: users});
    },
};