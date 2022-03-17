import React from "react"

const ItemDetail = ({prop}) => {
    return (
        <div key={prop.id} className="item">
            <img src={prop.img} alt="" />
            <div className="itemDetails"> 
            <h1>{prop.name}</h1>
            <p>{prop.price}</p>
            </div>
        </div>
    )
}
export default ItemDetail