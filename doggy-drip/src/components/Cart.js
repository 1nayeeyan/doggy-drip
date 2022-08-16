import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { ListGroup, ListGroupItem, Row, Col, Form } from "react-bootstrap";

export default function Cart() {
    const {state: {cart}, dispatch, } = CartState();

    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*(curr.qty), 0));
    }, [cart]);

    return(
        <div className="cart-page container mt-5">
            <div className="product-container">
                <ListGroup>
                    {cart.map(prod => (
                        <ListGroupItem>
                            <Row>
                                <Col md={2}> 
                                    <img className="product-in-cart" src={prod.previewImage}></img>
                                </Col>
                                <Col md={3}>
                                <span style={{textalign: 'center'}}>{prod.name}</span>
                                </Col>
                                <Col md={2}>
                                <span style={{textalign: 'center'}}>${prod.price}</span>
                                </Col>
                                <Col md={3}>
                                <span style={{textalign: 'center'}}>Variant: {prod.previewImageColor}</span>
                                </Col>
                                <Col md={2}>
                                    <Form.Control 
                                    as="select" 
                                    value={prod.qty}
                                    onChange={(e) => 
                                    dispatch({
                                        type: "qtyChange",
                                        payload: {
                                            id:prod.id,
                                            qty: e.target.value,
                                        },
                                    })}>
                                        <option value={0}>0</option>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                    </Form.Control>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
            <div className="summary mt-2">
                <h3>Subtotal {cart.length} items </h3>
                <ListGroup>
                    {cart.map(prod => (
                        <ListGroupItem className="total-calc mt-2 border-0">
                            <Row>
                                <span>${prod.price} x {prod.qty} = ${prod.price * prod.qty}</span>
                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <h2 className="total-title mt-5" >Total ${total > 0 ? total.toFixed(2) : total}</h2>
                <button type="button" className="btn btn-warning checkout-btn" disabled={cart.length === 0}>Proceed to Checkout</button>
            </div>
        </div>
        );
}
