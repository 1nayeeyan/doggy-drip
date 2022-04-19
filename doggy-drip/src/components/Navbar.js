import React from "react";
import Icon from '@mdi/react'
import { mdiMagnify } from '@mdi/js'
import { mdiHeartOutline } from '@mdi/js'; 
import { mdiCartOutline } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js'; 
import BrandLogo from '../images/brand/brand.png'

export default function Navbar() {
    return (
        <nav>
            <div id="logo">
                <img src={BrandLogo} alt="Brand Logo" id="brand-logo" />
            </div>

            <h3 id="shop-title">Shop</h3>
            
            <div id="nav-icons">
                <Icon path={mdiMagnify}
                size={1.25}
                color="black" />
                <Icon path={mdiHeartOutline}
                size={1.25}
                color="black" />
                <Icon path={mdiCartOutline}
                size={1.25}
                color="black" />
                <Icon path={mdiAccountOutline}
                size={1.25}
                color="black" />
            </div>
        </nav>
    )
}