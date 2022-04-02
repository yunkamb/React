import React, { useEffect, useState } from "react"
import ItemDetail from "../ItemList/ItemDetail"
import { Items } from "../mock/mock"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const itemId = useParams()
    useEffect(() => showDetail(), [])

    const showDetail = () => {
        const promesaDetalle = new Promise((resolve, reject) => {
                resolve(Items[itemId.id - 1])
        })

        promesaDetalle
            .then((param) => {
                setDetail(param)
            })
            .finally(() => {
                setLoading(false)
            })
    }


    return (
        <div>
            <p>{loading ? "Cargando ..." : "Ya tenes los productos"}</p>
            <div className="itemDetailContainer">
                <ItemDetail prop={detail} />
            </div>
        </div>
    )
}

export default ItemDetailContainer