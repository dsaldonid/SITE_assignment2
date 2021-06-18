import "./ProductDetail.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

export default function ProductDetail() {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProduct = async () => {
        setIsLoading(true)

        try {
            const res = await axios.get(`http://localhost:3001/products/${productId}`)
            if (res?.data?.product) {
            setProduct(res.data.product)
            }
        } catch (err) {
            setError(err)
        } finally {
            setIsLoading(false)
        }
        }

        fetchProduct()
    }, [productId])

  const renderDetailContent = () => {
    if (isLoading) return <h1>Loading...</h1>
    if (error) return <p className="description">No product found</p>
    return (
        <>
        <div className="wrapper">
            <img className = "productDetail" src = {`${product.image}`} alt = {`${product.name}`}></img>
            <div>
            <p className="description">{product?.description}</p>
            </div>
            <div className = "productSpecs">
                <span className="name">{`${product.name}`}</span>
                <span className="price">{`${product.price}`}</span>
            </div>
        </div>
        </>
      )
    }

  return (
    <div className="ProductDetail">
        {renderDetailContent()}
    </div>
    
   
  )
}