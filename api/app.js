const express = require("express");
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const path = require("path");

// Middleware
app.use(morgan("common"));
app.use(cors())
app.use(express.urlencoded({limit: "50mb", extended: true}));


// Route Imports
const userRoute = require("./routes/userRoute.js");

app.use("/api/v1", userRoute)

app.use(express.static(path.join(__dirname,"../client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
})

module.exports = app;