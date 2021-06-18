const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

// list all products
router.get("/products", async (req, res, next) => {
  try {
    const products = await Store.listProducts()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})

// create new product
router.post("/products", async (req, res, next) => {
  try {
    const product = req.body
    const newProduct = await Store.recordProduct(product)
    res.status(201).json({ product: newProduct })
  } catch (err) {
    next(err)
  }
})

// create new product
router.post("/cart", async (req, res, next) => {
  try {
    const cart = req.body
    const newProduct = await Store.recordPurchase(cart)
    res.status(201).json({ purchase: newProduct })
  } catch (err) {
    next(err)
  }
})

// fetch single product
router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product = await Store.fetchProductById(productId)
    if (!product) {
      throw new NotFoundError("Product not found")
    }
    res.status(200).json({ product })
  } catch (err) {
    next(err)
  }
})

module.exports = router
