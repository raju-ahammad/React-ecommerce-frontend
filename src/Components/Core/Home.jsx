import React, { useEffect, useState } from 'react';
import { getProducts } from './Helper/CoreApiCall';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const loadProducts = () => {
        getProducts()
            .then( (data)=> {
                if (data.error) {
                    setError(data.error);
                    console.log(error);
                }else {
                    setProducts(data);
                }
            })
    }

    useEffect (()=>{
        loadProducts();
    }, [loadProducts])

    return (
        <div>
            <h1 className="text-center m-4 text-info">Hello from Home Component</h1>
            <div className="row">
                {products.map((product, index)=>{
                    return (
                        <div key={index}>
                            <h3>{product.name}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
