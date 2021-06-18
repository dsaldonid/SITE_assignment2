import "./Sidebar.css"
import { Link } from "react-router-dom"

export default function Sidebar() {
  return (
    <section className="Sidebar closed">
      <div class="wrapper">
        <span class="toggle-button button closed">
          <i class="material-icons md-48">arrow_forward</i>
        </span>
        <div class="ShoppingCart">
          <div class="open">
            <h3 class="">
              Shopping Cart 
              <span class="button">
                <i class="material-icons md-48">
                  add_shopping_cart
                </i>
              </span>
            </h3>
            <div class="notification">
              No items added to cart yet. Start shopping now!
              </div>
            <div class="PaymentInfo">
              <h3 class="">
                Payment Info 
                <span class="button">
                  <i class="material-icons md-48">monetization_on</i>
                </span>
              </h3>
              <div class="input-field">
                <label class="label">Name</label>
                <div class="control ">
                  <input class="input" type="text" placeholder="Name" value=""></input>
                </div>
              </div>
              <div class="input-field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" placeholder="Email" value=""></input>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox"></input>
                    <span class="label">I agree to the 
                      <a href="#terms-and-conditions">terms and conditions</a>
                    </span>
                  </label>
                </div>
              </div>
                  <p class="is-danger">Error: Network Error</p>
                  <div class="field">
                    <div class="control">
                      <button class="button">Submit</button>
                    </div>
                  </div>
                </div>
          <div class="CheckoutSuccess">
            <h3>Checkout Info 
              <span class="icon button">
                <i class="material-icons md-48">fact_check</i>
              </span>
            </h3>
            <div class="content">
              <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.
              </p>
            </div>
          </div>
        </div>
          <div class="cart-icons">
            <span class="cart-icon icon button">
              <i class="material-icons md-48">add_shopping_cart</i>
            </span>
            <span class="cart-icon icon button">
              <i class="material-icons md-48">monetization_on</i>
            </span>
            <span class="cart-icon icon button">
              <i class="material-icons md-48">fact_check</i>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
