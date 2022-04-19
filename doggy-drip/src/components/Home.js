import Icon from "@mdi/react";
import React from "react";
import DogWalking from "../images/brand/dog-walking.svg"

export default function Home() {
    return (
        <div className="container">
            <Icon path={DogWalking}
                size={10.5}
                color="black" />
        </div>
    )
}