import React, { useState, useEffect } from 'react'
import axios from 'axios';
import data from '../data';
import Product from '../componenets/Products';



export default function HomeScreen() {
   const [products, setProducts] = useState ([]);
   useEffect(() => {
    const fetchdata = async () => {
        const {data} = await axios.get('/api/products');
        setProducts(data);
    };
    fetchdata();
   }, [])
    return (
        <div className="row center">
        {products.map((product)=>(
           <Product key = {product.id} product={product} ></Product>
        ))}
         </div>
    )
}
