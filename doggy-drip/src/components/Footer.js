import React from "react";
import Icon from '@mdi/react'
import { useNavigate } from "react-router-dom";
import { CartState } from "../context/Context";
import { motion } from "framer-motion";
import Wave from "../images/brand/wave.svg";
import WaveFill from "../images/brand/wave-haikei.svg";
import { mdiMapMarker } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiEmail } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiSnapchat } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';

export default function Footer() {
    let navigate = useNavigate();

    return (
        <footer>
            <img id="footer-wave" src = {Wave} />
            <div className="container">
                <div className="footer-container container">
                    <div className="row">
                        <div class="about-us col-sm-12 ">
                            <h5 class="headin5_amrc col_white_amrc pt2">About us</h5>
                            <p class="mb-10">Doggy Drip is a fake E-Commerce site created by Yanik Nayee, a computer science student specializing in Front-End Development. The site claims to sell dog products but it does absolutely nothing, if anything you can find the actual products on AliExpress.com. Just be aware, it'll probably take a month or two for the products to come in. Honestly, just spend an extra few bucks and go to Pet Value or buy it from Amazon.</p>
                            <p><Icon path={mdiMapMarker}
                                size={0.5}
                            /> 8840 Real Address, Toronto Ontario. </p>
                            <p><Icon path={mdiPhone}
                                size={0.5}
                            /> +1-6475558569  </p>
                            <p><Icon path={mdiEmail}
                                size={0.5}
                            /> doggydrip-support@gmail.com  </p>
                        </div>
                        </div>
                        <div className="row">
                        <div class="social mt-5 d-flex justify-content-center"><motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}className="p-1" href="#"><Icon path={mdiInstagram} size={1.6}/> </motion.a><motion.a whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9, x: "-5px", y: "5px" }} className="p-1" href="#"><Icon path={mdiSnapchat} size={1.6}/></motion.a><motion.a whileHover={{ scale: 1.1 }}whileTap={{ scale: 0.9, x: "-5px", y: "5px" }} className="p-1" href="#"><Icon path={mdiTwitter} size={1.6}/></motion.a><motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9, x: "-5px", y: "5px" }} className="p-1" href="#"><Icon path={mdiFacebook} size={1.6}/></motion.a></div>
                            <ul class="mt-3 list-inline d-flex justify-content-center">
                                <li class="list-inline-item"><a href="#" onClick={() => {
                                    navigate("./doggy-drip")
                                }}>Home</a></li>
                                <li class="list-inline-item"><a href="#">About Us</a></li>
                                <li class="list-inline-item"><a href="#">Newsletter</a></li>
                                <li class="list-inline-item"><a href="#">Terms</a></li>
                                <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
                            </ul>
                            <p class="copyright mt-3 d-flex justify-content-center">DoggyDrip © 2022</p>
                        </div>
                        </div>
                        </div>
            <img id="footer-wave-fill" src = {WaveFill} />
        </footer>
    )
}