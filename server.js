const express = require('express')
const app = express()
const mongoose = require("mongoose")
const mainRoutes = require('./routes/mainRoute')
const PORT = 3001

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("/TheWindyCityBreeze/server/public"));

//Routes
app.use("/", mainRoutes)

app.listen(PORT, () => {
console.log(`running on ${PORT}`)
})