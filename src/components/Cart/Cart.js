import { useContext } from "react"
import { contexto } from "../../MiProvider"

const Carrito = () => {

    const { carrito, clearProducto, borrarProducto } = useContext(contexto)

    return (
        <>
            <h2>Carrito</h2>
            <div>
            {carrito.map((carro) => {
                return <p key={carro.id}>Agregaste {carro.cantidad} {carro.item} al carrito.</p>
            })}
            </div>
            <button onClick={clearProducto}>Vaciar carrito</button>
        </>
    )
}

export default Carrito