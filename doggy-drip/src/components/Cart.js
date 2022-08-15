import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { ListGroup } from "react-bootstrap";

export default function Cart() {
    const {state: {cart}, dispatch, } = CartState();

    console.log(cart.length)

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*(curr.qty), 0));
    }, [cart]);

    return(
        <div className="cart-page container mt-5">
            <div className="product-container">
                <ListGroup>
                    {cart.map(prod => (
                        <span>{prod.name}</span>
                    ))}
                </ListGroup>
            </div>
            <div className="summary">
                <h3>Subtotal {cart.length} items </h3>
                <h3>Total ${total}</h3>
            </div>
        </div>
        );
}
