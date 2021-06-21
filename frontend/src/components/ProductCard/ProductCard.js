import "./ProductCard.css"
import minus_sign from "../../assets/minus_sign.svg"
import plus_sign from "../../assets/plus_sign.svg"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function ProductCard({product}) {
  const [quantity,setQuantity] = useState(0);

  const increment = () =>{
      setQuantity(quantity+1)
  }

  const decrement = () =>{
      if(quantity!= 0){
        setQuantity(quantity-1)
      }
  }
  return (
    <div className="ProductCard">
        <div className ="productInfo">
            <Link to={`/${product.id}`}>
                <img className = "product" src = {`${product.image}`} alt = {`${product.name}`}></img>
            </Link>
            <div className = "wrapper">
                <div className = "productSpecs">
                    <span className="name">{`${product.name}`}</span>
                    <span className="price">{`${product.price}`}</span>
                </div>
                <div className = "cartbuttons">
                    <input type="image" onClick = {increment} id ="image" height ="25px" width ="25px" alt="plus sign" src ={plus_sign}></input>
                    <input type="image" onClick = {decrement} id ="image" height ="25px" width ="25px" alt="minus sign" src ={minus_sign}></input>
                </div>
                <div className = "quantity">
                    <h3>{`${quantity}`}</h3>
                </div>
            </div>
        </div>
    </div>
      
   
  )
}
