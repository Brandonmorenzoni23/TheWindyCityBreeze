const express = require('express')
const app = express()
const passport = require("passport")
const session = require("express-session")
const MongoStore = require("connect-mongo");
const flash = require("express-flash");
const connectDB = require("./config/database");
const mongoose = require("mongoose")
const mainRoutes = require('./routes/mainRoute')
const productRoutes = require('./routes/productRoute')
const logger = require("morgan")
const PORT = 3002

//Use .env file in config folder
require("dotenv").config({path: './config/.env' });

//Using EJS for views
app.set("view engine", "ejs");

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport config
require("./config/passport");

//Logging
app.use(logger("dev"));


//Connect To Database
connectDB({});

//Static Folder
app.use(express.static("public"));

// Setup Sessions - stored in MongoDB
app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    })
  );
  
  // Passport middleware
app.use(passport.initialize());
app.use(passport.session());

  //Use flash messages for errors, info, ect...
app.use(flash());

//Routes
app.use("/", mainRoutes)
app.use("/product", productRoutes)

app.listen(PORT, () => {
console.log(`running on ${PORT}`)
})