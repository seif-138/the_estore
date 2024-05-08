import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function ProductDetails() {
    const params = useParams();
    const api_url=`https://fakestoreapi.com/products/${params.prodId}`;
    console.log(params.catg);
    // const api_url = `https://fakestoreapi.com/products/${params.prodId}`;
    const [fetprod, setFetProd] = useState([]);
    useEffect(() => {
        fetch(api_url)
            .then((res) => (res.json()))
            .then((data) => (setFetProd(data)))
    }, [])
    console.log(fetprod);
    return (
        <>
            <h1 style={{ color: "#000" }}>Product Details</h1>
            <h2> title: {fetprod.title}</h2>
            <p>Product ID: {params.prodId}</p>
            <div className="container p-2" style={{ borderColor:"#CC54B5"}}>
                <div className="card p-2" >
                    <img
                        src={fetprod.image}
                        className="card-img-top w-25 mx-auto"
                        alt={fetprod.title}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{fetprod.title}</h5>
                        <p className="card-text" style={{ color: "#000" }}>{fetprod.description}</p>
                        <p className="card-text">
                            <small className="text-muted">${fetprod.price}</small>
                        </p>
                    </div>
                </div>
            </div>

        </>
    )

}
export default ProductDetails