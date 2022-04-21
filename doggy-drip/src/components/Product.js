import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Product() {
    
    let productid = useParams()
    // console.log(productid.productid)

    const objectArray = Object.values(products);
    // console.log(objectArray)

    const product = objectArray.find(element => element.id == productid.productid);
    // console.log(product)
    return (
        <h1>{product.name}</h1>
    )
}