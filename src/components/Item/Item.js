import React from "react";

const Item = ({ id, img, name, price }) => {
    return (
        <div key={id}>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}

export default Item