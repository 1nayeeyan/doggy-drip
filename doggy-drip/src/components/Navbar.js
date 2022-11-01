import React from "react";
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'
import { mdiHeartOutline } from '@mdi/js'; 
import { mdiCartOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js'; 
import BrandLogo from '../images/brand/brand.png'
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/Context";
import { motion } from "framer-motion";

export default function Navbar() {
    let navigate = useNavigate();

    const {state: {cart}, } = CartState();

    return (
        <nav>
            <motion.div 
                id="logo"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }} 
                >    
                <img src={BrandLogo} 
                alt="Brand Logo" 
                id="brand-logo"
                onClick={() => {
                    navigate("./doggy-drip")
                }}/>
            </motion.div>

            <motion.h3
                id="shop-title" 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9, x: "-5px", y: "5px" }} 
                onClick={() => {
                navigate("./shop")
            }}> Shop </motion.h3>
            
            <div id="nav-icons">
                <Icon path={mdiMagnify}
                size={1.25}
                className="mobile-hidden"
                color="black" />
                <Icon path={mdiHeartOutline}
                className="mobile-hidden"
                size={1.25}
                color="black" />
                <Icon path={mdiCartOutline}
                size={1.25}
                className={cart.length > 0 ? "cart cart-filled" : "cart cart-empty"}
                onClick = {() =>
                    navigate("./cart")
                }
                />
                <Icon path={mdiAccountOutline}
                className="mobile-hidden"
                size={1.25}
                color="black" />
            </div>
        </nav>
    )
}