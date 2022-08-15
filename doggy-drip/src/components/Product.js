import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { CartState } from "../context/Context";

export default function Product() {

    const {state} = useLocation();
    const {prod, key} = state;

    console.log(prod);
    
    const [chosenPhoto, setChosenPhoto] = React.useState(false)
    const [chosenColor, setChosenColor] = React.useState(false)

    const {state: {cart}, dispatch,} = CartState();
    console.log(cart);

    const gallery = Object.values(prod.gallery);

    function changeStyle(image) {
        setChosenPhoto(image)
        setChosenColor(image.slice(25, image.indexOf('.')))
        prod.previewImage = image;
        prod.previewImageColor = image.slice(25, image.indexOf("."));
    }

    function galleryMaker(){
        
        const image = gallery.map(
            image => <img onClick={() => changeStyle(image)} key={image} className="gallery-images"src = {image} />
        )
        return image
    }

    return (
        <div className="product-page container mt-5">
            <p className="path-text text-muted">Shop / {prod.name}</p>
            <img id="product-page-preview" src={chosenPhoto || prod.previewImage} alt={prod.name}></img>
            <div className="product-page-text">
                <div className="product-page-header">
                    <h3 className="product-page-name text-body">{prod.name}</h3>
                    <h4 className="product-page-price text-body">${prod.price}</h4>
                </div>
                <div className="product-page-body mt-4">
                    <p>{prod.category}</p>
                    <h5>Color: {chosenColor || prod.previewImageColor}</h5>
                    {galleryMaker()}
                    {
                        cart.some((p) => p.id === key) ? (
                            <button type="button" className="btn btn-danger remove-from-cart mt-5" onClick={() =>{
                                dispatch({
                                    type:'RemoveFromCart',
                                    payload: prod,
                                });
                            }}> Remove From cart
                            </button>
                        ):(
                            <button type="button" className="btn btn-success add-to-cart mt-5" onClick={() => {
                                dispatch({
                                    type:'AddToCart',
                                    payload: prod,
                                });
                            }}>Add to cart
                            </button>)
                    }
                </div>
            </div>
        </div>
    )
}
