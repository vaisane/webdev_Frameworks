const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
router.use(express.json());
router.use(express.urlencoded({extended: true}));

// Product storage in memory
let inMemoryDB = require('../inMemoryDB.json')

// Get all users
router.get("/", (req, res) => {
    res.json(inMemoryDB.users);
})

// Get single user 
router.get('/id=:id', (req, res) => {
    let index = inMemoryDB.users.findIndex(e => e.id === req.params.id);
    res.json(inMemoryDB.users[index]);
  })

// Create user
router.post("/", (req, res) => {
    inMemoryDB.users.push({
        id: uuidv4(),
        name: req.body.name,
        adress: req.body.adress,
        phone: req.body.phone,
        email: req.body.email,  
        invoices: []
      })
      res.send("New user created");
})


module.exports = router
