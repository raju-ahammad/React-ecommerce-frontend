import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Base from './Base';
import Card from './Card';
import { getProducts } from './Helper/CoreApiCall';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    



    const loadProducts = () => {
        getProducts()
            .then( (data)=> {
                if (data.error) {
                    setError(data.error); 
                }else {
                    setProducts(data);       
                }
            })
    }

    useEffect (()=>{
        loadProducts();
    }, [])
    

    return (
        <Base title="Home Page" description="welcome to To my store">
            <h1 className="text-center m-4 text-info">Hello from Home Component <Link to="signup">Sign Up</Link> </h1>
            <div className="row">
              
                {products.map((product, index)=>{
                    return (
                        <div key={index} className="col-3 mb-4">
                            <Card product={product} />
                        </div>
                    )
                })}
            </div>
            {error}
        </Base>
    )
}

export default Home
