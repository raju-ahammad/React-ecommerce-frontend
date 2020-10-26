import React, { useEffect, useState } from 'react'
import Base from './Base'
import Card from './Card'
import { loadCart } from './Helper/CartHelper'


const Cart = () => {

    const [products, setProducts] = useState([])
    const [reload, setRealod] = useState(false)

    useEffect(()=> {
        setProducts(loadCart());
    }, [reload])

    const loadProduct = (products) => {
        return (
            <div className="" style={{width:"200px"}}>
                {products.map((product, index) => {
                    return <Card keu={index} product={product} removeFromCart={true} addtocart={false} reload={reload} setReload={setRealod} />
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
