import React from "react";
import Products from "./products"
import './products.css';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function ProductList() {
    const {catg}=useParams();
    let a;
    console.log(catg);
    if(catg){
        console.log(`we r in catg ${catg}`);
        a=`https://fakestoreapi.com/products/category/${catg}`;
        console.log(a);
    }
    else{
        console.log("we r in else catg");
        a="https://fakestoreapi.com/products";
    }
    // const api_url = "https://fakestoreapi.com/products";
    const api_url = a;
    const [product, setProduct] = useState([]);
    
    const getProducts=()=>{
        catg?a=`https://fakestoreapi.com/products/category/${catg}`:a="https://fakestoreapi.com/products";
        fetch(a)
        .then((res) => res.json())
        .then((data) => setProduct(data))
      
    }
    
    useEffect(() => {
      getProducts();
       console.log("we r in useeffect"); 
    }, [catg]);
   

    return (
        <>
        <div className="container-card">
            {product.map((product)=>{
            return(
             <div className="for-k" key={product.id}>
            <Products product={product}/>
             </div>
             
             )
            })}
            
            
            
        </div>
        </>
    )
}
export default ProductList
// Compare this snippet from src/components/productList.jsx:
// 