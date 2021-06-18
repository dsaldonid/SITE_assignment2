// import { Link } from "react-router-dom"
// import FilterInput from "../FilterInput/FilterInput"
import "./subNavbar.css"

export default function subNavbar() {
  return (
    <div className="subNavbar">
      <div className ="content">
          <div className = "row">
            <div className = "search-bar">
                <input type="text" name="search" placeholder="Search" value=""></input>
                <i className ="material-icons">search</i>
            </div>
            <div className = "links">
                <span class="help">
                    <i class="material-icons">help</i>
                    Help
                </span>
                <div class="cart">
                    <a href="/">My Cart<i class="material-icons">shopping_cart</i></a>
                </div>
            </div>
          </div>
          <div className = "row">
            <div class="hamburger-menu"><i class="material-icons">menu</i></div>
            <ul class="category-menu open">
                <li class="is-active"><button>All Categories</button></li>
                <li class=""><button>Clothing</button></li>
                <li class=""><button>Food</button></li>
                <li class=""><button>Accessories</button></li>
                <li class=""><button>Tech</button></li>
            </ul>
          </div>
      </div>
    </div>
  )
}
