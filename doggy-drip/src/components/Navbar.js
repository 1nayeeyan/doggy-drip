import React from "react";
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'
import { mdiHeartOutline } from '@mdi/js'; 
import { mdiCartOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js'; 
import BrandLogo from '../images/brand/brand.png'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

export default function Navbar() {
    let navigate = useNavigate();

    const {state: {cart}, } = CartState();

    return (
        <nav>
            <div id="logo">
                <img src={BrandLogo} alt="Brand Logo" id="brand-logo" />
            </div>

            <h3 id="shop-title" onClick={() => {
                navigate("./shop")
            }}> Shop </h3>
            
            <div id="nav-icons">
                <Icon path={mdiMagnify}
                size={1.25}
                color="black" />
                <Icon path={mdiHeartOutline}
                size={1.25}
                color="black" />
                <Icon path={mdiCartOutline}
                size={1.25}
                className={cart.length > 0 ? "cart-filled" : "cart-empty"}
                onClick = {() =>
                    navigate("./cart")
                }
                />
                <Icon path={mdiAccountOutline}
                size={1.25}
                color="black" />
            </div>
        </nav>
    )
}