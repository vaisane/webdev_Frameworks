const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
router.use(express.json());
router.use(express.urlencoded({extended: true}));
// Product storage in memory
let inMemoryDB = require('../inMemoryDB.json')

// Create invoice for user
// Puts stuff in from shopping cart and empties cart + calculates price
router.post("/", (req, res) => {
    let index = inMemoryDB.users.findIndex(e => e.id === req.body.userID);
    let items = [];
    let totalPrice = 0;
    for(let i = 0; i < inMemoryDB.shoppingCart.length; i++){
        items.push(inMemoryDB.shoppingCart[i].productName)
    }
    for(let i = 0; i < inMemoryDB.shoppingCart.length; i++){
        totalPrice += inMemoryDB.shoppingCart[i].price;
    }
    inMemoryDB.users[index].invoices.push({invoiceID: uuidv4(), purchasedItems: items, price: totalPrice});
    inMemoryDB.shoppingCart = [];
    res.send("Invoice created and shopping cart emptied")
})
// Get all invoices of user
router.get("/userid=:id/",(req, res) => {
    let index = inMemoryDB.users.findIndex(e => e.id === req.params.id);
    res.json(inMemoryDB.users[index].invoices);
})

// Get single invoice of user by invoiceID
router.get("/userid=:id/:invoiceID",(req, res) => {
    let index = inMemoryDB.users.findIndex(e => e.id === req.params.id);
    let invoiceIndex = inMemoryDB.users[index].invoices.findIndex(e => e.invoiceID === req.params.invoiceID);
    res.json(inMemoryDB.users[index].invoices[invoiceIndex]); 
})

// Delete single invoice of user by invoiceID
router.delete("/",(req, res) => {
    let index = inMemoryDB.users.findIndex(e => e.id === req.body.userID);
    let invoiceIndex = inMemoryDB.users[index].invoices.findIndex(e => e.invoiceID === req.body.invoiceID);
    inMemoryDB.users[index].invoices.splice(invoiceIndex,1);
    res.send("Deleted");
})
module.exports = router