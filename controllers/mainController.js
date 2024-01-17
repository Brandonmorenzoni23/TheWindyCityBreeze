const passport = require("passport");
const User = require("../models/User");


module.exports = {
    getMain: (req, res) => {
      res.render("homepage.ejs");
    },
    getShop: (req, res) => {
      res.render("shop.ejs");
    },
    getContent: (req, res) => {
      res.render("content.ejs");
    },

};