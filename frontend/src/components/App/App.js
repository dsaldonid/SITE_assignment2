import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import subNavbar from "../subNavbar/subNavBar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"

export default function App() {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProduct] = useState([])
  const [filterInput, setFilterInput] = useState("")

  const onInputChange = (event) => {
    setFilterInput(event.target.value)
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const productRes = await axios.get("http://localhost:3001/products")
        if (productRes?.data?.products) {
          setProduct(productRes.data.products)
        }

      } catch (err) {
        console.log({ err })
        setError(err)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  const addProduct = (newProduct) => {
    setProduct((products) => [...products, newProduct])
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Sidebar/>
      <main>
        <Navbar />
        <subNavbar />
        <Routes>
          <Route path="/" element={<Home products={products}/>}></Route>
          <Route path="/products/:productId" element={<ProductDetail/>}></Route>
        </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}
