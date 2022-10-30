import React from "react";
import { useNavigate } from "react-router-dom";
import DogWalking from "../images/brand/dog-walking.svg"
import Wave from "../images/brand/wave.svg"
import { motion } from "framer-motion";

export default function Home() {
    let navigate = useNavigate();
    return (
      <div className="container">
        <div className="intro-block">
        <img id="walk" src={DogWalking} alt="walking-dog" />
        <div className="intro-block-text">
            <h2 id="intro-text">
              Dogs leave paw prints on our hearts, so treat them right while they're here.
            </h2>
            <motion.button type="button" 
            className="btn btn-warning shop-now"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }} 
            onClick={() => {
              navigate("/shop")
             }
            }>Shop Now
            </motion.button>
        </div>
        </div>
      </div>
  )
}

