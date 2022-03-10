import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting, picture }) => {

    return (
        <div className="itemContainer">
            <h1>{greeting}</h1>
            <p><img src={picture} alt="picture" /></p>
            <ItemCount
                stock={10}
                initial={5}
                onAdd={contador => console.log(`Agregados ${contador} productos`)}
            />
            <ItemList />
        </div>
    );
}

export default ItemListContainer