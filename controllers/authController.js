exports.getLogin = (req, res) => {
    //if (req.user) {
    //  return res.redirect("/profile");
    //}
    res.render("login", {
      title: "Login",
    });
  };