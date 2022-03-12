import React from "react"
import ReactDOM from 'react-dom'
import { PavaElectrica } from "../ItemList/ItemDetail"


const detalles = () => {
    return (
        <div className="item">
            <img src={PavaElectrica.img} alt="" />
            <div className="itemDetails">
                <h1>{PavaElectrica.nombre}</h1>
                <p>Precio: ${PavaElectrica.precio}</p>
                <p>Podes pagar en hasta {PavaElectrica.cuotas} cuotas sin interes</p>
                <p>Contamos con {PavaElectrica.stock} productos en stock</p>
            </div>
        </div>
    )
}

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



const ItemDetailContainer = () => {
    return (
        <div>
            <button onClick={showDetails}>Mostrar detalles</button>
            <p className="itemDetailContainer"></p>
        </div>
    )
}

export default ItemDetailContainer