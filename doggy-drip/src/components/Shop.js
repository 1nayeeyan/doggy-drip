import React from "react";
import { useNavigate} from "react-router-dom";
import { CartState } from "../context/Context";
import { motion } from "framer-motion";

export default function Shop(){
    let navigate = useNavigate();

    //navigate to product's page and send state
    function viewProduct(product) {
        navigate(`/product/${product.id}`, {
            state: {
                prod: product,
                key: product.id,
            }
        });
    }

    const {
        state: {products},
    } = CartState();

    //creates the grid view of products
    const product = products.map((product) =>
        <motion.div key={product.id} 
        className="product col-sm mb-5" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
        onClick={() => viewProduct(product) }>
            <img 
            src={product.previewImage} 
            alt={product.name} 
            />
            <div className="product-text">
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
            </div>
        </motion.div>
        )

    return(
        <div className="products-grid container">
            <h2 className="category-header mt-5 mb-2">All Products</h2>
            <h3 className="category-header mt-2 mb-5">{products.length} Items</h3>
            <div className="container-md row gx-2">
            {product}
            </div>
        </div>
    )
}
