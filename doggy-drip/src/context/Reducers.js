export const cartReducer = (state, action) => {

    //functions to change state of cart with desired action
    switch (action.type) {
        case "AddToCart":
            return{...state, cart:[...state.cart, {...action.payload, qty:1}] };
        case "RemoveFromCart":
            return{...state, cart:state.cart.filter(c=>c.id!==action.payload.id)};
            case "qtyChange":
            return{...state,cart:state.cart.filter((c)=>c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty),};
        default:
            return state;
    }
};