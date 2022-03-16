import { Items } from "../Item/Item"

const ItemList = () => {
        return (
            <div className="itemList">
                {Items.map(item => {
                    return (
                        <div key={item.id}>
                            <img src={item.img} alt="" />
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                    )
                })}
            </div>
        )
    }


export default ItemList