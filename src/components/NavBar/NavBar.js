function NavBar({picture}) {
    return (
        <nav className="navBar">
            <a href="">Inicio</a>
            <a href="">Productos</a>
            <a href="">Contacto</a>
            <a href="">Nosotros</a>
            <img src={picture} alt="cartWidget" />
        </nav>
    )
}

export default NavBar