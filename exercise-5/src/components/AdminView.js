import React, { useState } from 'react'

export default function AdminView(props) {
    const[productName, setProductName] = useState("");
    const[manufacturer, setManufacturer] = useState("");
    const[price, setPrice] = useState("");
    const[category, setCategory] = useState("");
    const[rating, setRating] = useState("");
    
    return (
        <div className="adminView">
            <div className="adminViewInputRow"><span>Product name:</span> <input type="text" onChange={(event) => setProductName(event.target.value)}/></div>
            <div className="adminViewInputRow"><span>Manufacturer:</span> <input type="text" onChange={(event) => setManufacturer(event.target.value)}/></div>
            <div className="adminViewInputRow"><span>Price:</span> <input type="text" onChange={(event) => setPrice(event.target.value)}/></div>
            <div className="adminViewInputRow"><span>Rating:</span> <input type="text" onChange={(event) => setRating(event.target.value)}/></div>
            <div className="adminViewInputRow"><span>Category:</span> <input type="text" onChange={(event) => setCategory(event.target.value)}/></div>
            <div className="adminViewInputRow" style={{marginTop: "30px"}}>
                <button onClick={() => props.additems(productName, manufacturer, price, category, rating)}>Add</button>
                <button onClick={() => props.toggleview()}>Back</button>
            </div>
        <h1 style={{marginTop: "30px"}}>Items: </h1>
        {props.productData.map((product, index) => <div key={index}>
            <button onClick={() => props.deleteitems(index)} style={{color:"red", backgroundColor: "white", padding: "3px"}}>x</button>{product.productName}</div>)} 
        </div>
    )
}
