const passport = require("passport");
const validator = require("validator");
const User = require("../models/user");

//GET Request
exports.getLogin = (req, res) => {
  const users = req.user ? req.user:''
  if (users === req.user) {
    return res.redirect("/");
  }
  res.render("login.ejs", {users: users});
};
exports.getSignup = (req, res) => {
  const users = req.user ? req.user:''
  if (users === req.user) {
    return res.redirect("/");
  }
  res.render("signup", {
    title: "Create Account", users: users
  });
};
exports.getLogout = (req, res) => {
  req.logout(() => {
    console.log('User has logged out.')
  })
  req.session.destroy((err) => {
    if (err)
      console.log("Error : Failed to destroy the session during logout.", err);
    req.user = null;
    res.redirect("/");
  });
};

//Post Req
exports.postLogin = async (req, res, next) => {
  console.log(req.body);
  const validationErrors = [];
  if (!validator.isEmail(req.body.email)) {
    validationErrors.push({ msg: "Please enter a valid email address." });
  }
 

  if (validationErrors.length) {
    console.log("errors", validationErrors);
    req.flash("errors", validationErrors);
    return res.redirect("/login");
  }
  req.body.email = validator.normalizeEmail(req.body.email, {
    gmail_remove_dots: false,
  });

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash("errors", info);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", { msg: "Success! You are logged in." });
      res.redirect(req.session.returnTo || "/");
    });
  })(req, res, next);
};



  exports.postSignup = async (req, res, next) => {
    const validationErrors = [];
    if (!validator.isEmail(req.body.email))
      validationErrors.push({ msg: "Please enter a valid email address." });
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
  