import { Link } from "react-router-dom"
import { Items } from "../mock/mock"

function NavBar({ picture }) {
    const handleCategoryLinks = () => {
        let hash = {}
        return Items && Items
            .filter(item => hash[item.category] ? false : hash[item.category] = true)
            .map(item => (
                <Link key={item.id} to={`/category/${item.category}}`}>{item.category}</Link>
            ))
    }
    return (
        <nav className="navBar">
            {handleCategoryLinks()}
            <Link to="detalles">Detalles</Link>
            <Link to="info">Info</Link>
            <Link to="/carrito">Carrito</Link>
            <img src={picture} alt="Carrito" />
        </nav>
    )
}

export default NavBar

/* const productFilter = productList.filter(items => items.category === id)
      res(productFilter) */