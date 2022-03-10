import React, { useState } from 'react'
import { ITEMS } from "../Item/Item"


const ItemList = ({ }) => {

    const getItems = () => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                const respuesta = ITEMS
                resolve(respuesta)
                //reject("Error en la respuesta") 
            }, 2000)
        })

        promesa.then((param) => {
            console.log(param)
        }).catch((error) => {
            console.log(`Error!: ${error}`)
        })
    }

    {
        ITEMS.map(item => {
            return (
                <div key={item.id}>
                    <p><img src={item.img} />{item.name} {item.price} </p>
                </div>
            )
        })
    }



    return (
        <div className="itemList">
            <button onClick={getItems()}>Mostrar productos</button>
        </div>
    )
}

export default ItemList