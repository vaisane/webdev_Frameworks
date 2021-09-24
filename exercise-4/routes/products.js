const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// Product storage in memory
let inMemoryDB = require('../inMemoryDB.json')

// Create new product
router.post('/', (req, res) => {
    inMemoryDB.products.push({
      id: uuidv4(),
      name: req.body.name,
      manufacturer: req.body.manufacturer,
      category: req.body.category,
      description: req.body.description,
      price: req.body.price    
    })
    res.send("New product created");
  })
  
  // Get all inMemoryDB.products
  router.get('/', (req, res) => {
    res.json(inMemoryDB.products);
  })
  
  // Get single product
  router.get('/id=:id', (req, res) => {
    let index = inMemoryDB.products.findIndex(e => e.id === req.params.id);
    res.json(inMemoryDB.products[index]);
  })
  
  // Delete single product
  router.delete('/id=:id', (req, res) => {
    let index = inMemoryDB.products.findIndex(e => e.id === req.params.id);
    if(index !== -1) {
      inMemoryDB.products.splice(index, 1);
      res.send("Deleted")
    }
    res.send("Not found")
  })
  
  // Modify single product
  router.put('/id=:id', (req, res) => {
    let index = inMemoryDB.products.findIndex(e => e.id === req.params.id);
    if(index !== -1) {
      inMemoryDB.products.splice(index, 1, {
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price    
      });
      res.send("Successfully modified")
    } 
    res.send("Not found");
  })
  
  // Search for inMemoryDB.products based on name, manufacturer, category
  
  // Function for getting all indexes for multiple search results
  // inMemoryDB.products = inMemoryDB.products array
  // reqParamKey = manufacturer, name, categery etc...
  // searchKey = inMemoryDB.products.searchKey
  const getAllIndexes = (products, reqParamKey, searchKey) => {
    let indexArray = [];
    for(let i=0; i<products.length; i++){
      if (inMemoryDB.products[i][searchKey].toLowerCase() === reqParamKey.toLowerCase()){
        indexArray.push(i);
      };
    }
    return indexArray;
  }
  
  
  
  // Name
  router.get('/name=:name', (req, res) => {
    let indexArray = getAllIndexes(inMemoryDB.products, req.params.name, "name")
    let searchResult = [];
    for(let i = 0; i<indexArray.length; i++){
      searchResult.push(inMemoryDB.products[indexArray[i]]);
    }
    res.json(searchResult);
  })
  // Manufacturer
  router.get('/manufacturer=:manufacturer', (req, res) => {
    let indexArray = getAllIndexes(inMemoryDB.products, req.params.manufacturer, "manufacturer")
    let searchResult = [];
    for(let i = 0; i<indexArray.length; i++){
      searchResult.push(inMemoryDB.products[indexArray[i]]);
    }
    res.json(searchResult);
  })
  // Category
  router.get('/category=:category', (req, res) => {
    let indexArray = getAllIndexes(inMemoryDB.products, req.params.category, "category")
    let searchResult = [];
    for(let i = 0; i<indexArray.length; i++){
      searchResult.push(inMemoryDB.products[indexArray[i]]);
    }
    res.json(searchResult);
  })



module.exports = router