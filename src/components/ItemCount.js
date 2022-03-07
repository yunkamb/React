import { useState } from "react"

const ItemCount = ({ stock, initial }) => {
    const [contador, setContador] = useState(initial)
    const incrementar = () => {
        setContador(contador + 1)
    }
    const disminuir = () => {
        if (contador > 1) { 
            setContador(contador - 1) }
    }
    const confirmar = () => {
        contador <= stock ? console.log(`Confirmados ${contador} productos`) : console.log(`No hay suficiente stock`)
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