import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import ReactDOM from 'react-dom'
import React, { useEffect, useState } from "react"

const ItemListContainer = ({ greeting }) => {


    useEffect(() => getItems, [])

    const getItems = () => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                const respuesta = <ItemList />
                resolve(respuesta)
                //reject("Error en la respuesta") 
            }, 2000)
        })

        promesa
            .then((param) => {
                ReactDOM.render(param, document.querySelector(".mostrarProductos"))
            })
            .catch((error) => {
                console.log(`Error!: ${error}`)
            })
    }


    return (
        <div className="itemContainer">
            <h1>{greeting}</h1>
            <ItemCount
                stock={10}
                initial={5}
                onAdd={contador => console.log(`Agregados ${contador} productos`)}
            />
            <div>
                <button className="btnProductos" onClick={getItems}>Mostrar productos</button>
                <div className="mostrarProductos"></div>
            </div>
        </div>
    );
}

export default ItemListContainer