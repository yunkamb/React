import React, { useState } from "react"

const ItemCount = ({ initial, onAdd }) => {
    const [contador, setContador] = useState(initial)
    const incrementar = () => {
            setContador(contador + 1)
    }
    const disminuir = () => {
        if (contador > initial) {
            setContador(contador - 1)
        }
    }
    const confirmar = () => {
        if (contador > 0) {
            onAdd(contador)
        }
    }

    return (
        <div className="itemBtn">
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={confirmar}>Agregar productos</button>
            <p>{contador}</p>
        </div>
    )
}

export default ItemCount