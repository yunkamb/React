const PavaElectrica = {
    nombre: "Pava Electrica Jarra Acero Inoxidable Mate Cafe 2lts Donidea",
    precio: "2.490",
    cuotas: 12, 
    stock : 20,
    img: "https://http2.mlstatic.com/D_NQ_NP_621509-MLA49261524733_032022-O.webp"
}

const detalles = () => {
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

export default detalles