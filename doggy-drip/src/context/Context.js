import { createContext, useContext, useReducer } from "react";
import products from "../data/products";
import { cartReducer } from "./Reducers";

//create context to keep a cart state synched throughout the whole app
const Cart = createContext();

const Context = ( {children} ) => {
    //intialize how data will be stored
    const product = products.map((p) => ({
        category: p.category,
        id: p.id,
        name: p.name,
        price: p.price,
        previewImage: p.previewImage,
        previewImageColor: p.previewImageColor,
        gallery: p.gallery,
    }));
        
    //call functions to change state of cart
    const [state, dispatch] = useReducer(cartReducer, {
        products: product,
        cart:[]
    })

    return (
        <Cart.Provider value={{state, dispatch}}>
            {children}
        </Cart.Provider>
    )
}

export default Context

export const CartState = () => {
    return useContext(Cart);
}