import React from "react";
import { CartState } from "../context/Context";

export default function Cart() {
    const {state: {cart} } = CartState();

    console.log(cart)

    return(
        <h1>0</h1>
    )
}