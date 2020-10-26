import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../Auth/Helper';
import { addItemCart, removeItemFromCart } from './Helper/CartHelper';
import ImageHelper from './Helper/ImageHelper';


const Card = ({product, addtocart=true, removeFromCart=false, reload=undefined, setReload=(f) =>f, }) => {

    const [redirect, setRedirect] = useState(false)
    const cartTitle = product ? product.name : "Anonymous";
    const cartDescription = product ? product.description : "defaoult description"
    const cartPrice = product ? product.price : "0.0"

    const addToCart = () => {
        if(isAuthenticated()) {
            addItemCart(product, ()=> setRedirect(true))
            console.log("Add to cart");
        }else {
            console.log("log in first");
        }
    }

    const getRedirect = (redirect) => {
        if(redirect) {
            return <Redirect to="/cart" />
        }
    } 
    const showAddToCart = (addToCart) => {
        return (
          addtocart && (
                <button
                onClick={addToCart}
                className="btn btn-block btn-outline-success mt-2 mb-2"
              >
                Add to Cart
              </button>
            )
        )
    }
    const showRemoveFromCart = (removeFromCart) => {
        return (
          removeFromCart && (
                <button
                onClick={() => {
                    removeItemFromCart(product.id)
                    setReload(!reload)
                    console.log("product remove from cart");
                }}
                className="btn btn-block btn-outline-danger mt-2 mb-2"
              >
                Remove from cart
              </button>
            )
        )

    }



    return (
      <div className="card text-white bg-dark">
        <div className="card-header lead text-center"> {cartTitle} </div>
        <div className="card-body">
          <div className="p-2">
          {getRedirect(redirect)}
            <ImageHelper product={product}/>
          </div>
            <p className="btn btn-success rounded  btn-sm px-4">Tk{ cartPrice }</p>
          <div className="row">
            <div className="col-12">
              {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
              {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Card
