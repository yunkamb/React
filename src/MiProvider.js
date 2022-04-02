import { createContext, useState } from "react";

export const contexto = createContext()
const Provider = contexto.Provider

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregarProducto = (item, cantidad, id) => {
        const newItem = {
            id: id,
            item: item,
            cantidad: cantidad
        }
        setCarrito([...carrito, newItem])
    }

    const borrarProducto = (id) => {
        const newItems = setCarrito.filter((item) => item.id !== id)
        setCarrito(newItems)
    }

    const clearProducto = () => {
        setCarrito([])
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