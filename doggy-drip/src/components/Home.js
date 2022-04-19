import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import DogWalking from "../images/brand/dog-walking.svg"

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
            <button type="button" className="btn btn-warning shop-now" onClick={() => {
                navigate("/shop")
             }
            }>Shop Now
            </button>
        </div>
        </div>
      </div>
  )
}

