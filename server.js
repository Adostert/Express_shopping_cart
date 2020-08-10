"use strict";
const express = require("express");
const app = express();
const cartItems = require("./routes");
const cors = require('cors');

app.use(express.static("./public"));
app.use(express.json());
app.use("/", cartItems);
app.use(cors());

app.listen(8081, function() {
    console.log("The server is goochi.");
});