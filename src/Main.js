import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer"
import CartWidget from "./components/NavBar/CartWidget"
import { Routes, Route } from "react-router-dom"

const Main = () => {

    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/carrito" element={<CartWidget />} />
                <Route path="/detalles/:id" element={<ItemDetailContainer />} />
            </Routes>
        </main>
    );
}

export default Main