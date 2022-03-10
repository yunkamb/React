import React, { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
    const [contador, setContador] = useState(initial)
    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const disminuir = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
    const confirmar = () => {
        if (contador > 0 && contador <= stock) {
            console.log(onAdd)
        }
    }

    return (
        <div className="itemBtn">
            <p>{contador}</p>
            <button onClick={disminuir}>Disminuir</button>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={confirmar}>Confirmar</button>
        </div>
    )
}

export default ItemCount