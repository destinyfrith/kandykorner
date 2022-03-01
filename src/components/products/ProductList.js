import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, updateProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
                .then((productData) => {
                    updateProducts(productData)
                })
        },
        []
    )

    return (
        <>
            {
                products.map(
                    (product) => {
                        return <div key={`product--${product.id}`}>
                            <p>  {product.name} {product.price}
                                {product.productTypeId.type} </p>
                        </div>
                    }
                )
            }
        </>
    )
}