import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

const Main = () => {

    return (
        <main className="container">
            <ItemListContainer
                greeting="Bienvenidos a MercadoPobre"
                picture="https://i.imgflip.com/6745lw.jpg"
            />
        </main>
    );
}

export default Main