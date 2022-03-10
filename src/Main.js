import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const Main = () => {

    return (
        <main className="container">
            <ItemListContainer
                greeting="Bienvenidos a MercadoPobre"
                picture="https://http2.mlstatic.com/D_NQ_NP_751105-MLA31029782685_062019-O.jpg"
            />
        </main>
    );
}

export default Main