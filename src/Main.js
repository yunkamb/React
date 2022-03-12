import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer"

const Main = () => {

    return (
        <main className="container">
            <ItemListContainer
                greeting="Bienvenidos a MercadoPobre"
            />
        <ItemDetailContainer />
        </main>
    );
}

export default Main