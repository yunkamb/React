import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import React, { useEffect, useState } from "react"
import { Items } from "../mock/mock"

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => getItems, [])

    const getItems = () => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Items)
                //reject("Error en la respuesta") 
            }, 2000)
        })

        promesa
            .then((param) => {
                setProducts(param)
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
                <div className="mostrarProductos"><ItemList prop={products} /></div>
            </div>
        </div>
    );
}

export default ItemListContainer