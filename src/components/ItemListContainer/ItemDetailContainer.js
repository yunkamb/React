import { PavaElectrica } from "../ItemList/ItemDetail"

const ItemDetailContainer = () => {
    return (
        <div className="item">
            <img src={PavaElectrica.img} alt="" />
            <div className="itemDetails">
            <h1>{PavaElectrica.nombre}</h1>
                <p>Precio: ${PavaElectrica.precio}</p>
                <p>Podes pagar en hasta {PavaElectrica.cuotas} cuotas sin interes</p>
                <p>Contamos con {PavaElectrica.stock} productos en stock</p>
            </div>
        </div>
    )
}

export default ItemDetailContainer