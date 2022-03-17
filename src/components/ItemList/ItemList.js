import Item from "../Item/Item"

const ItemList = ({ prop }) => {
    return (
        <div className="itemList">
            {prop.map(item => {
                return (
                    <Item {...item}/>
                )
            })}
        </div>
    )
}


export default ItemList