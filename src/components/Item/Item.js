import React from "react";
import { Link } from "react-router-dom"

const Item = ({ id, img, name, price }) => {


    return (
        <div>
            <img src={img} alt="" />
            <div className="itemDesc">
                <h1>{name}</h1>
                <p>{price}</p>
                <button><Link to={`/detalles/${id}`}>Ver detalles</Link> </button>
            </div>
        </div>
    )
}

export default Item