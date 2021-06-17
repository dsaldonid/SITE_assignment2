const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {
  static async listProducts() {
    // list all items in the transactions array
    const products = storage.get("products").value()
    return products
  }


  static async fetchProductById(productId) {
    // fetch a single transaction
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value()
    return product
  }

  //have checkout function
  //have add to cart function


  static async recordProduct(product) {
    // create a new transaction

    if (!product) {
      throw new BadRequestError(`No transaction sent.`)
    }
    const requiredFields = ["description", "name", "category","image","source","price"]
    requiredFields.forEach((field) => {
      if (!product[field] && product[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in product`)
      }
    })

    const products = await Store.listProducts()
    const productId = products.length + 1

    const newProduct = { id: productId,  ...product }

    storage.get("products").push(newProduct).write()

    return newProduct
  }

}

module.exports = Store
