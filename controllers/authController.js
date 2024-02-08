const passport = require("passport");
const validator = require("validator");
const User = require("../models/User");

//GET Request
exports.getLogin = (req, res) => {
    if (req.user) {
      return res.redirect("/");
    }
    res.render("login.ejs", {
      title: "Login",
    });
  };
  exports.getSignup = (req, res) => {
    if (req.user) {
      return res.redirect("/");
    }
    res.render("signup", {
      title: "Create Account",
    });
  };

  

  //Post Req
  exports.postLogin = async (req, res, next) => {
    console.log('req')
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
    if (validator.isEmpty(req.body.password))
      validationErrors.push({ msg: "Password cannot be blank." });
  
    if (validationErrors.length) {
      req.flash("errors", validationErrors);
      return res.redirect("/login");
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });
  
    passport.authenticate("local", async (err, user, info) => {
      if (err) {
        return next(err);
      }
      if (!user) {
        req.flash("errors", info);
        return res.redirect("/login");
      }
      await req.logIn(user);
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect("/");
    })(req, res, next);
  };



  exports.postSignup = async (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
    if (!validator.isLength(req.body.password, { min: 8 }))
      validationErrors.push({
        msg: "Password must be at least 8 characters long",
      });
    if (req.body.password !== req.body.confirmPassword)
      validationErrors.push({ msg: "Passwords do not match" });
  
    if (validationErrors.length) {
      req.flash("errors", validationErrors);
      return res.redirect("/signup");
    }
    req.body.email = validator.normalizeEmail(req.body.email, {
      gmail_remove_dots: false,
    });
  
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
  
    try {
      const existingUser = await User.findOne({
        $or: [{ email: req.body.email }, { userName: req.body.userName }],
      });
      if (existingUser) {
        req.flash("errors", {
          msg: "Account with that email address or username already exists.",
        });
        return res.redirect("../signup");
      }
      await user.save();
      res.redirect("/");
    } catch (err) {
      return next(err);
    }
  };
  