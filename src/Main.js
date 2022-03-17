import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer"
import CartWidget from "./components/NavBar/CartWidget"
import { Routes, Route } from "react-router-dom"

const Main = () => {

    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/productos" element={<ItemListContainer />} />
                <Route path="/detalles" element={<ItemDetailContainer />} />
                <Route path="/carrito" element={<CartWidget/>}/>
            </Routes>
        </main>
    );
}
{/* <ItemListContainer greeting="Bienvenidos a MercadoPobre" />
<ItemDetailContainer /> */}

export default Main