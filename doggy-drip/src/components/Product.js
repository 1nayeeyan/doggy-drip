import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";

export default function Product() {
    const [chosenPhoto, setChosenPhoto] = React.useState(false)
    const [chosenColor, setChosenColor] = React.useState(false)
    
    let productid = useParams()
    // console.log(productid.productid)

    const objectArray = Object.values(products);
    // console.log(objectArray)

    const product = objectArray.find(element => element.id === productid.productid);
    // console.log(product)

    const gallery = Object.values(product.gallery)
    // console.log(gallery)

    function changeStyle(images) {
        setChosenPhoto(images)
        setChosenColor(images.slice(25, images.indexOf('.')))
    }

    function galleryMaker(){
        const images = gallery.map(
            images => <img onClick={() => changeStyle(images)} key={images}className="gallery-images"src = {images} />
        )
        return images
    }

    // function chosenPhoto(photoUrl){
    //     console.log(photoUrl)
    //     let chosenPhoto = photoUrl
    //     let chosenPhotoColor = photoUrl.slice(14, photoUrl.indexOf('.'))
    //     console.log(chosenPhotoColor)

    //     return chosenPhoto, chosenPhotoColor
    // }

    return (
        <div className="product-page container mt-5">
            <p className="path-text text-muted">Shop / {product.name}</p>
            <img id="product-page-preview" src={chosenPhoto || product.previewImage} alt={product.name}></img>
            <div className="product-page-text">
                <div className="product-page-header">
                    <h3 className="product-page-name text-body">{product.name}</h3>
                    <h4 className="product-page-price text-body">${product.price}</h4>
                </div>
                <div className="product-page-body mt-4">
                    <p>{product.category}</p>
                    <h5>Color: {chosenColor || product.previewImageColor}</h5>
                    {galleryMaker()}
                    <button type="button" className="btn btn-success add-to-cart mt-5" onClick={() => {
                        }
                        }>Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}