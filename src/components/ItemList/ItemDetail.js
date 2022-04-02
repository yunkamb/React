import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { contexto } from "../../MiProvider"

const ItemDetail = ({ prop }) => {

    const { agregarProducto } = useContext(contexto)
    const [total, setTotal] = useState(false)
    const [seleccionado, setSeleccionado] = useState(false)

    const onAdd = (unidadSeleccionada) => {
        if (unidadSeleccionada != undefined) {
            setTotal(`Agregados ${unidadSeleccionada} productos al carrito`)
            setSeleccionado(unidadSeleccionada)
        }
            
    }

    const handleClick = () => {
        agregarProducto(prop.name, seleccionado, prop.id)
    }

    return (
        <div key={prop.id} className="item">
            <img src={prop.img} alt="" />
            <div className="itemDetails">
                <h1>{prop.name}</h1>
                <p>{prop.price}</p>
                <ItemCount initial={1} onAdd={onAdd} />
                <p className="carritoTotal">{total}</p>
                {total ? <Link onClick={handleClick} to="/carrito">Carrito</Link> : null}
            </div>
        </div>
    )
}

export default ItemDetail
