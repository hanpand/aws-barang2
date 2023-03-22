import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'
import './product.css'
export const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    let { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems = cartItems[id]
    return (
        <div className='product'>
            <img src={productImage} />
            <div className="description">
                <p> <b>{productName}</b></p>
                <p> Rp{price}</p>
            </div>
            {/* <button className="addtoCartBttn" onClick={() => addToCart(id)}> Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button> */}
        </div>
    )
}
