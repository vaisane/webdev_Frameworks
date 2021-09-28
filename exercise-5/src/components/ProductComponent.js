import React from 'react'

export default function ProductComponent(props) {
    return (
            <div className="ProductComponent">
                <img src={"/images/"+props.picture} alt={props.productName}></img>
                <h3>{props.productName}</h3>
                <div className="manufacturer">by {props.manufacturer}</div>
                <div className="price">$<span className="priceFont">{props.price}</span></div>
                <div className="rating">Rating: {props.rating} / 5</div>
            </div>     
    )
}
