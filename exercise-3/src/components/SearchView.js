import React from 'react'
import ProductComponent from './ProductComponent'
export default function SearchView(props) {
    return (
        <div className="searchView">
            {props.productData.map(item => <ProductComponent {...item} key={item.id}/>)}
        </div>
    )
}
