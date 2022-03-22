import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import React, { useEffect, useState } from "react"
import { Items } from "../mock/mock"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    
    return (
        <div className="itemContainer">
            <h1>{greeting}</h1>
            <div>
                <div className="mostrarProductos"><ItemList prop={Items} /></div>
            </div>
        </div>
    );
}

export default ItemListContainer