import { useContext } from "react"
import { contexto } from "../../MiProvider"

const Carrito = () => {

    const { carrito, clearProducto, borrarProducto } = useContext(contexto)

    return (
        <>
            <h2>Carrito</h2>
            <div className="carritoItemContainer">
                {carrito.map((carro) => {
                    return (
                        <div className="carritoItem" key={carro.id}>
                            <div >
                                <img src={carro.img} alt="" />
                                <p >Agregaste {carro.cantidad} {carro.item} al carrito.</p>
                                <button onClick={()=> borrarProducto(carro.item)}>Eliminar</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <button onClick={clearProducto}>Vaciar carrito</button>
        </>
    )
}

export default Carrito