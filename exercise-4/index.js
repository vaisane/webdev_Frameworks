const express = require('express');
const cors = require('cors');
const app = express()
const port = 4000

app.use(express.json());
app.use(cors());

// Routes
const productsRouter = require("./routes/products")
const userRouter = require("./routes/users")
const shoppingcartRouter = require("./routes/shoppingcart")
const invoiceRouter = require("./routes/invoices")
app.use("/products", productsRouter);
app.use("/users", userRouter);
app.use("/shoppingcart", shoppingcartRouter);
app.use("/invoices", invoiceRouter);


// Get index
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})