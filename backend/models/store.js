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

  static async recordPurchase(purchase) {
    // create a new purchase
    const user = purchase.userInfo
    const cart = purchase.cart

    if (!user) {
      throw new BadRequestError(`Please enter user information.`)
    }
    if (!cart) {
      throw new BadRequestError(`Please enter cart information.`)
    }
    const requiredFields = ["name", "email"]
    requiredFields.forEach((field) => {
      if (!user[field] && user[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in userInfo`)
      }
    })
    const tax = .07
    let total = 0;
    let grandTotal = 0
    let newPurchase = {productRow:[]}
    for (const [key, value] of Object.entries(cart)) {
      let product = storage.get("products").find({ name :key }).value();
      total = value * product.price;
      grandTotal += total;
      let productPlus = {...product ,"Quantity":value,'Total':total};
      newPurchase.productRow.push(productPlus);
    }

    grandTotal += (grandTotal*tax);
    newPurchase["purchase"] = {...user,"Total":grandTotal};
  
    storage.get("cart").push(newPurchase).write()

    return newPurchase;
  }

}

module.exports = Store
