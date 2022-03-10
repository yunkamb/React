import React, { useState } from 'react'
import Item from "../Item/Item"

const ItemList = ({ items }) => {

    <div className="itemList">
        {items.map(item => {
            return (
                <div key={item.id}>
                    <p><img src={item.img} />{item.name} {item.price} </p>
                </div>
            )
        })}
    </div>
}

export default ItemList