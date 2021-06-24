const { BadRequestError } = require("../utils/errors")
const { storage } = require("../data/storage")

class Store {
  /**
  * Lists all products within our database
  * * @return   List{Object} products       list of products with info
  */
  static async listProducts() {
    // list all items in the transactions array
    const products = storage.get("products").value()
    return products
  }

  /**
  * Grabs a single item in database from id number
  * @param    {String} productId    id of certain product
  * @return   {Object} product      product object with product info
  */
  static async fetchProductById(productId) {
    // fetch a single transaction
    const product = storage
      .get("products")
      .find({ id: Number(productId) })
      .value()
    return product
  }

  /**
  * Add a new product into our storage
  * @param    {String} product        product object with required fields
  * @return   {Object} newProduct     new product object with product info
  */
  static async recordProduct(product) {
    if (!product) {
      throw new BadRequestError(`No transaction sent.`)
    }
    const requiredFields = ["description", "name", "category","image","source","price"]
    requiredFields.forEach((field) => {
      if (!product[field] && product[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in product`)
      }
    })

    //grab all products to create unique productId
    const products = await Store.listProducts()
    const productId = products.length + 1

    const newProduct = { id: productId,  ...product }

    //add new product to our database
    storage.get("products").push(newProduct).write()

    return newProduct
  }


  /**
  * Creates a receipt object from purchase
  * @param    {String} purchase        product object with user and cart info
  * @return   {Object} newPurchase     new pirchase object with cart info
  */
  static async recordPurchase(purchase) {
    // grab user and cart info
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

    // loop through cart keys to grab individual product info
    for (const [key, value] of Object.entries(cart)) {
      let product = storage.get("products").find({ name :key }).value();
      total = value * product.price;
      grandTotal += total;
      let productPlus = {...product ,"Quantity":value,'Total':total};
      newPurchase.productRow.push(productPlus);
    }

    
    grandTotal += (grandTotal*tax);

    //add purchase key with user info and grand total 
    newPurchase["purchase"] = {...user,"Total":grandTotal};
    
    //add the purchase into cart storage
    storage.get("cart").push(newPurchase).write()

    return newPurchase;
  }

}

module.exports = Store
