import * as React from 'react';
import './products.css';
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
function Products(props) {
    
   const {product}=props;
   const url=`/product/${product.id}`;
    return (
      
                <div className="card" style={{ width: '18rem' , display:"inline-block",height:'31em',backgroundColor:' #CC54b5',}}>
                    <img src={product.image} className="card-img-top" alt={product.description} />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.price}$</p>
                      <br></br>
                        <Link to={url}> <button className="my-btn">
                        details </button>
                        </Link >
                       
                   </div>
               </div>
          
       
      
        
    )
}
export default Products

