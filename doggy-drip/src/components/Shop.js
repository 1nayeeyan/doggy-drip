import React from "react";
import products from "../data/products";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Product from "./Product";

export default function Shop(){
    let navigate = useNavigate();
    let {productid} = useParams();
    const product = products.map(product =>
        <div className="product col-sm mb-5" onClick={() =>
        navigate(`/product/${product.id}`) &&  
        <Product
            key = {product.id}
            value = {product.name}
        />
        }>
            <img src={product.previewImage} />
            <div className="product-text">
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
            </div>
        </div>
        )

    return(
        <div className="products-grid container">
            <h2 className="category-header mt-5 mb-5">All Products</h2>
            <div className="container-md row">
            {product}
            </div>
        </div>
    )
}

