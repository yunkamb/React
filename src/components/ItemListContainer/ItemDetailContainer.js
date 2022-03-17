import React, { useEffect, useState } from "react"
import ReactDOM from 'react-dom'
import ItemDetail from "../ItemList/ItemDetail"
import { Items } from "../mock/mock"


const ItemDetailContainer = () => {

    const [details, setDetails] = useState({})

    useEffect(() => showDetails, [])
    
    const showDetails = () => {
        const promesaDetalle = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Items[0])
                //reject("Error en la respuesta") 
            }, 2000)
        })

        promesaDetalle
            .then((param) => {
                setDetails(param)
            })
            .catch((error) => {
                console.log(`Error!: ${error}`)
            })
    }


    return (
        <div>
            <button onClick={showDetails}>Mostrar detalles</button>
            <div className="itemDetailContainer"><ItemDetail prop={details}/></div>
        </div>
    )
}

export default ItemDetailContainer