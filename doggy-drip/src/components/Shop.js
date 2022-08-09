import React from "react";
import { useState } from "react";
import products from "../data/products";
import { useNavigate} from "react-router-dom";
import Product from "./Product";

export default function Shop(){
    let navigate = useNavigate();
    const [cart, setCart] = useState('')

    function viewProduct(product) {
        navigate(`/product/${product.id}`)
        // <Product "setCart" />;
    }



    const product = products.map(product =>
        <div key={product.id} className="product col-sm mb-5" onClick={() => viewProduct(product)}>
            <img src={product.previewImage} />
            <div className="product-text">
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
            </div>
        </div>
        )

    return(
        <div className="products-grid container">
            <h2 className="category-header mt-5 mb-2">All Products</h2>
            <h3 className="category-header mt-2 mb-5">{products.length} Items</h3>
            <div className="container-md row">
            {product}
            </div>
        </div>
    )
}

