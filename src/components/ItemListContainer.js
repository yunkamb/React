import ItemCount from "./ItemCount"

const ItemListContainer = ({ greeting, picture }) => {

    return (
        <div className="itemContainer">
            <h1>{greeting}</h1>
            <p><img src={picture} alt="picture" /></p>
            <ItemCount
                stock={10}
                initial={5}
             />
        </div>
    );
}

export default ItemListContainer