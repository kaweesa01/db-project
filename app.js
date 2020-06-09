const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const path = require("path");
const mongoose = require('mongoose')

/*********Arrangement should be like this*********/

//db configuration
const db = require('./config/keys').MongoURL

///DB connection
mongoose.connect(db,{useNewUrlParser: true}).then(() => console.log('connected to mongoose')).catch(err => console.log(err))

//ejs layouts
app.set("view engine", "ejs");
app.use(expressLayouts);

///////body parser
app.use(express.urlencoded({ extended: true }));

////index route
app.use("/", require("./routes/index"));

//static folder with css and js and font
app.use(express.static(path.join(__dirname, "Utilities")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
