import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [productRender, updateProducts] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/products")
                .then(res => res.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        []
    )

    return (
        <>
            <div>{productRender}</div>
            {
                products.map(
                    (productObject) => {
                        return <p key={`product--${productObject.id}`}>
                            {productObject.name}<br></br>
                            {productObject.price}<br>
                            {productObject.productTypeId} </br>
                            
                        </p>
                    }
                )
            }
        </>
    )
}