import RedBlackBell from "../images/bells/Red-Black.png"
import BlueBlackBell from "../images/bells/Blue-Black.png"
import BlueYellowBell from "../images/bells/Blue-Yellow.png"
import YellowBlackBell from "../images/bells/Yellow-Black.png"
import RedWhiteBell from "../images/bells/Red-White.png"

import BlueChew from "../images/chew-toy/Blue.png"
import GreenChew from "../images/chew-toy/Green.png"
import RedChew from "../images/chew-toy/Red.png"

import BlueRing from "../images/ring-chew-toy/Blue.png"
import GreenRing from "../images/ring-chew-toy/Green.png"
import OrangeRing from "../images/ring-chew-toy/Orange.png"
import PurpleRing from "../images/ring-chew-toy/Purple.png"

import BlueSpike from "../images/spiky-ball/Blue.png"
import GreenSpike from "../images/spiky-ball/Green.png"
import OrangeSpike from "../images/spiky-ball/Orange.png"

import OrangeTeddy from "../images/teddy/Orange.png"
import BrownTeddy from "../images/teddy/Brown.png"

import BlueBowl from "../images/feeding-bowl/Blue.png"
import PinkBowl from "../images/feeding-bowl/Pink.png"
import GreenBowl from "../images/feeding-bowl/Green.png"


const products = [
    {
     category: "Toy",
     id: "bell",
     name: "Bells",
     price: 19.98,
     previewImage: RedBlackBell,
     previewImageColor: "Red/Black",
     gallery: {
         redBlack: RedBlackBell,
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
        previewImageColor: "Red",
        gallery: {
            red: RedChew,
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
        previewImageColor: "Blue",
        gallery: {
            blue: BlueRing,
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
        previewImageColor: "Blue",
        gallery: {
            blue: BlueSpike,
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
        previewImageColor: "Brown",
        gallery: {
            brown: BrownTeddy,
            orange: OrangeTeddy,
        }
       },
       {
        category: "Food",
        id: "bowl",
        name: "Feeding Bowl",
        price: 25.99,
        previewImage: BlueBowl,
        previewImageColor: "Blue",
        gallery: {
            blue: BlueBowl,
            green: GreenBowl,
            pink: PinkBowl
        }
       },
    
];

export default products;
