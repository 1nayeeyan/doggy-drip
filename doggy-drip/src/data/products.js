import RedBlackBell from "../images/bells/red-black.png"
import BlueBlackBell from "../images/bells/blue-black.png"
import BlueYellowBell from "../images/bells/blue-yellow.png"
import YellowBlackBell from "../images/bells/yellow-black.png"
import RedWhiteBell from "../images/bells/red-white.png"

import BlueChew from "../images/chew-toy/blue.png"
import GreenChew from "../images/chew-toy/green.png"
import RedChew from "../images/chew-toy/red.png"

import BlueRing from "../images/ring-chew-toy/blue.png"
import GreenRing from "../images/ring-chew-toy/green.png"
import OrangeRing from "../images/ring-chew-toy/orange.png"
import PurpleRing from "../images/ring-chew-toy/purple.png"

import BlueSpike from "../images/spiky-ball/blue.png"
import GreenSpike from "../images/spiky-ball/green.png"
import OrangeSpike from "../images/spiky-ball/orange.png"

import OrangeTeddy from "../images/teddy/orange.png"
import BrownTeddy from "../images/teddy/brown.png"

import BlueBowl from "../images/feeding-bowl/blue.png"
import PinkBowl from "../images/feeding-bowl/pink.png"
import GreenBowl from "../images/feeding-bowl/green.png"


const products = [
    {
     category: "Toy",
     id: "bells",
     name: "Bells",
     price: 19.98,
     previewImage: RedBlackBell,
     gallery: {
         blueBlack: BlueBlackBell,
         blueYellow: BlueYellowBell,
         yellowBlack: YellowBlackBell,
         redWhite: RedWhiteBell
     }
    },
    {
        category: "Toy",
        id: "chew",
        name: "Chew Toy",
        price: 12.89,
        previewImage: RedChew,
        gallery: {
            blue: BlueChew,
            green: GreenChew
        }
       },
       {
        category: "Toy",
        id: "ringchew",
        name: "Ring Chew Toy",
        price: 15.99,
        previewImage: BlueRing,
        gallery: {
            purple: PurpleRing,
            green: GreenRing,
            orange: OrangeRing
        }
       },

       {
        category: "Toy",
        id: "spikeball",
        name: "Spike Ball",
        price: 8.99,
        previewImage: BlueSpike,
        gallery: {
            orange: OrangeSpike,
            green: GreenSpike
        }
       },
       {
        category: "Toy",
        id: "teddy",
        name: "Teddy",
        price: 14.99,
        previewImage: BrownTeddy,
        gallery: {
            orange: OrangeTeddy,
        }
       },
       {
        category: "Food",
        id: "bowl",
        name: "Feeding Bowl",
        price: 25.99,
        previewImage: BlueBowl,
        gallery: {
            green: GreenBowl,
            pink: PinkBowl
        }
       },
    
];

export default products;
