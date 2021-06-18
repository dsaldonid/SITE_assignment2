import { Link } from "react-router-dom"
import FilterInput from "../FilterInput/FilterInput"
import codepath from "../../assets/codepath.svg"
import facebook from "../../assets/facebook.svg"
import insta from "../../assets/insta.svg"
import twitter from "../../assets/twitter.svg"
import "./Navbar.css"

export default function Navbar({ filterInput, onInputChange }) {
  return (
    <nav className="Navbar">
      <Link className="logo" to="/">
        <img src={codepath} alt="logo" />
      </Link>

      <div className="content">
        <div className ="socials">
          <Link className="twitter" to="https://twitter.com/codepath?lang=en">
            <img src={twitter} alt="twitter" />
          </Link>
          <Link className="insta" to="https://www.instagram.com/codepathorg/?hl=en">
            <img src={insta} alt="instagram" />
          </Link>
          <Link className="facebook" to="https://www.facebook.com/codepath.org/">
            <img src={facebook} alt="facebook" />
          </Link>
        </div>
        <ul className= "links">
          <li>
            <a href=">">Home</a>
          </li>
          <li>
            <a href=">">About Us</a>
          </li>
          <li>
            <a href=">">Contact Us</a>
          </li>
          <li>
            <a href=">">Buy Now</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
