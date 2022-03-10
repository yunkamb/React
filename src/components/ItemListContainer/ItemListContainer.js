import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting, picture }) => {

    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("hola");
        }, 2000)

    })
    promesa.then((param) => {
        console.log(param)
    })

    return (
        <div className="itemContainer">
            <h1>{greeting}</h1>
            <p><img src={picture} alt="picture" /></p>
            <ItemCount
                stock={10}
                initial={5}
                onAdd={"Agregados tus productos al carrito"}
            />
        </div>
    );
}

export default ItemListContainer