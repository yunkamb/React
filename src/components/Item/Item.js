import React, { useState } from "react"


const Items = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "Pava Electrica",
            price: "$2.490",
            img: "https://http2.mlstatic.com/D_NQ_NP_815052-MLA41537440658_042020-O.webp",
        },
        {
            id: 2,
            name: "Cafetera",
            price: "$5.000",
            img: "https://http2.mlstatic.com/D_NQ_NP_730756-MLA48462631814_122021-O.webp",
        },
        {
            id: 3,
            name: "Horno Eléctrico",
            price: "$15.000",
            img: "https://http2.mlstatic.com/D_NQ_NP_881651-MLA43579033796_092020-O.webp",
        },
    ])

    return (
        <div className="itemList">
            {items.map(item => {
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

export default Items