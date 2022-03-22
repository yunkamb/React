import React from "react"
import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ prop }) => {
    const [total, setTotal] = useState("Carrito vacio")

    return (
        <div>
            <div key={prop.id} className="item">
                <img src={prop.img} alt="" />
                <div className="itemDetails">
                    <h1>{prop.name}</h1>
                    <p>{prop.price}</p>
                </div>
            </div>
            <ItemCount initial={1} onAdd={contador => setTotal(`Agregados ${contador} productos al carrito`)} />
            <p className="carritoTotal">{total}</p>
        </div>
    )
}
export default ItemDetail
