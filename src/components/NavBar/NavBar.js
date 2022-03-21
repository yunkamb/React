import { Link } from "react-router-dom"

function NavBar({picture}) {

    

    return (
        <nav className="navBar">
            <Link to="/category/electrodomesticos">Electrodomésticos</Link>
            <Link to="/category/utensillos">Utensillos</Link>
            <Link to="detalles">Detalles</Link>
            <Link to="info">Info</Link>
            <Link to="/carrito">Carrito</Link>
            <img src={picture} alt="Carrito" />
        </nav>
    )
}

export default NavBar