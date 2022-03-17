import React from "react"

const ItemDetail = ({prop}) => {
    return (
        <div className="item">
            <img src={prop.img} alt="" />
            <div className="itemDetails"> 
                <h1>{prop.nombre}</h1>
                <p>Precio: ${prop.precio}</p>
            </div>
        </div>
    )
}

export default ItemDetail