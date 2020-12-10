import express from 'express'

import products from './data/product.js'

const app = express()

app.get('/', (req, res) => {
  res.send('APi is running')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/product/:id', (req, res) => {
  const product = products.find((p) => p._id == req.params.id)
  if (product === null) {
    return
  }
  res.json(product)
})

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})
