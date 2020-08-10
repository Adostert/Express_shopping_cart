"use strict";
const express = require("express");
const cartItems = express.Router();
const items = [
    {
        id:"0",
        product:"Sushi",
        price:"10",
        quantity:"1"
    },
    {
        id:"1",
        product:"Tomatoes",
        price:"3",
        quantity:"1"
    },
    {
        id:"2",
        product:"Sad Sauce",
        price:"5",
        quantity:"1"
    },
    {
        id:"3",
        product:"Liquid Death",
        price:"666",
        quantity:"1"
    }
];
cartItems.get("/cart-items", function(req, res) {
    res.send(items);
    console.log(items);
    console.log("get request made.");
});
cartItems.post("/cart-items", function(req, res) {
    res.send(items);
    console.log(req.body.item);
});
cartItems.put("/cart-items/:id", function(req, res) {
    res.send(items);
    console.log(req.body.item);
    console.log(req.params.id);
});
cartItems.delete("/cart-items/:id", function(req, res) {
    res.send(items);
    console.log(req.params.id);
});
module.exports = cartItems;