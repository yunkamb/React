import React, { useEffect, useState } from "react"
import ReactDOM from 'react-dom'
import detalles from "../ItemList/ItemDetail"


const ItemDetailContainer = () => {

    useEffect(() => showDetails, [])

    const showDetails = () => {
        const promesaDetalle = new Promise((resolve, reject) => {
            setTimeout(() => {
                const respuesta = detalles()
                resolve(respuesta)
                //reject("Error en la respuesta") 
            }, 2000)
        })

        promesaDetalle
            .then((param) => {
                ReactDOM.render(param, document.querySelector(".itemDetailContainer"))
            })
            .catch((error) => {
                console.log(`Error!: ${error}`)
            })
    }


    return (
        <div>
            <button onClick={showDetails}>Mostrar detalles</button>
            <div className="itemDetailContainer"></div>
        </div>
    )
}

export default ItemDetailContainer