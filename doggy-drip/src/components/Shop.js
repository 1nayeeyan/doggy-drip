import React from "react";
import { useNavigate} from "react-router-dom";
import { CartState } from "../context/Context";

export default function Shop(){
    let navigate = useNavigate();

    function viewProduct(product) {
        navigate(`/product/${product.id}`)
    }

    const {
        state: {products},
    } = CartState();

    const product = products.map((product) =>
        <div key={product.id} className="product col-sm mb-5" onClick={() => viewProduct(product)}>
            <img src={product.image} alt={product.name} />
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

