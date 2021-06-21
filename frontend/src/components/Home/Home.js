import ProductCard from "../ProductCard/ProductCard"
import "./Home.css"
import { Link } from "react-router-dom"

export default function Home({products}) {
  
  return (
    <div className="Home">
      <div class="Hero">
        <div class="content">
          <div class="intro">
            <h1>Welcome!</h1>
            <h1>Find Your Merch!</h1>
            <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
          </div>
          <div class="media">
            <img src="https://student-store.surge.sh/static/media/phone.f9dcbab5.svg" alt="hero"></img>
          </div>
        </div>
      </div>
      <div class="About" id="About">
        <div class="content">
          <h3>About</h3>
          <div class="summary">
            <div class="text">
              <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
              <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
              <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
            </div>
            <div class="media">
              <img src="https://student-store.surge.sh/static/media/giant_codepath.ce489369.svg" alt="codepath large"></img>
            </div>
          </div>
        </div>
      </div>
      <div id="Buy" class="ProductGrid">
        <div class="content">
          <h3>Best Selling Products</h3>
          <div class="grid">
            {products.map((product) => (
                <ProductCard product = {product}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
