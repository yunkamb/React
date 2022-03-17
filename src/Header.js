import NavBar from "./components/NavBar/NavBar"
import {Link} from "react-router-dom"

function Header() {
    return (
        <header id="mainHeader">
            <Link to="/">
            <h1>MercadoPobre</h1>
            </Link>
            <NavBar 
                picture="https://cdn.icon-icons.com/icons2/1875/PNG/512/shoppingcart_120371.png"/>
        </header>
    )
}

export default Header 