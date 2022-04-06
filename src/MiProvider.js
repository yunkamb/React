import { createContext, useState } from "react";

export const contexto = createContext()
const Provider = contexto.Provider

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (item, cantidad, id, img) => {

        let newItem = { id: id, item: item, cantidad: cantidad, img: img }

        let carritoAux = []

        if (isInCart(item)) {
            console.log("esta en el carrito")
            newItem = carrito.find(product => product.item === item)
            newItem.cantidad = newItem.cantidad + cantidad
            carritoAux = [...carrito]
        } else {
            console.log("no esta en el carrito")
            carritoAux = [newItem, ...carrito]
        }
        setCarrito(carritoAux)
    }

    const borrarProducto = (item) => {
        if (isInCart(item)) {
            console.log("Producto eliminado")
            const carritoAux = carrito.filter(product => product.item !== item)
            setCarrito(carritoAux)
        }
    }

    const clearProducto = () => {
        setCarrito([])
    }

    const isInCart = (item) => {
        return carrito.find(product => product.item === item)
    }

    const providerValue = {
        carrito,
        agregarProducto,
        clearProducto,
        borrarProducto
    }

    return (
        <Provider value={providerValue}>
            {children}
        </Provider>
    )
}

export default MiProvider