import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Items from "../Item/Item"


const ItemList = () => {

    const getItems = () => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                const respuesta = <Items />
                resolve(respuesta)
                //reject("Error en la respuesta") 
            }, 2000)
        })

        promesa.then((param) => {
            ReactDOM.render(param, document.querySelector(".mostrarProductos"))
        }).catch((error) => {
            console.log(`Error!: ${error}`)
        })
    }

    return (
        <div>
            <button className="btnProductos" onClick={getItems}>Mostrar productos</button>
            <div className="mostrarProductos"></div>
        </div>
    )
}

export default ItemList