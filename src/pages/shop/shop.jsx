import React from 'react'
import { PRODUCTS } from "../../products"
import { Product } from './product'
import "./shop.css";

export const Shop = () => {
    return (
        <div className="card-container">
            <div className="card">
                <figure></figure>
                <div className="shop"> {/* shop ~ meta */}
                    <h2> </h2>
                    <div className="shopTitle"> {/* shopTitle ~ time */}
                        <span className="time"></span>
                    </div>
                    <div className="notes">
                        <p className="desc"> </p>
                        <div className="links"></div>
                    </div>
                    <div className="products">
                        {PRODUCTS.map((product) => <Product data={product} />)}
                    </div>
                </div>
            </div>
        </div>

    )
}