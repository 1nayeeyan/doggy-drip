import { createContext, useContext, useReducer } from "react";
import products from "../data/products";
import { cartReducer } from "./Reducers";

//create context to keep a cart state synched throughout the whole app
const Cart = createContext();

const Context = ( {children} ) => {

    const product = products.map((p) => ({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.previewImage,
    }));
        
    // console.log(products);

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