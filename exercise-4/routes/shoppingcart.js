const express = require("express");
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));
// Product storage in memory
let inMemoryDB = require('../inMemoryDB.json')

router.get("/", (req, res) => {
    res.json(inMemoryDB.shoppingCart);
})

// Add stuff to shopping cart
router.post("/", (req,res) => {
    let index = inMemoryDB.products.findIndex(e => e.id === req.body.itemID);
    if(index !== -1){
        inMemoryDB.shoppingCart.push(inMemoryDB.products[index])
        res.send("Item added")
    } else {
        res.send("Id not found")
    }
})


module.exports = router