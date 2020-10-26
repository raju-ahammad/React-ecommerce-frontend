import React, { useEffect, useState } from 'react'
import Base from './Base'
import Card from './Card'
import { loadCart } from './Helper/CartHelper'


const Cart = () => {

    const [products, setProducts] = useState([])

    useEffect(()=> {
        setProducts(loadCart());
    }, [])

    const loadProduct = (products) => {
        return (
            <div>
                {products.map((product, index) => {
                    return <Card keu={index} product={product} removeFromCart={true} addTocart={true} />
                })}
            </div>
        )
    }

    const checkoutProduct = () => {
        return (
            <div>
                Check out
            </div>
        )
    }

    return (
       <Base title="cart page"  description="cart page">
       <div className="row">
           <div className="col-6">
               {loadProduct(products)}
           </div>
           <div className="col-6">
               {checkoutProduct()}
           </div>
       </div>
       </Base>
    )
}

export default Cart
