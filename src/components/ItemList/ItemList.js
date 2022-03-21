import Item from "../Item/Item"

const ItemList = ({ prop }) => {
    return (
        <div className="itemList">
            {prop.map(item => {
                return (
                    <Item key={item.id}{...item} />
                )
            })}
        </div>
    )
}


export default ItemList