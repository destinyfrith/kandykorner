import React, { useEffect, useState } from "react";

export const ProductList = () => {
    const [products, updateProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId&_order=asc")
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
                    (productObject) => {
                        return <div key={`product--${productObject.id}`}>
                            <p>  {productObject.name} {" "}
                                {productObject.price} {" "}
                                Category: {productObject.productType.type} 
                                </p>
                        </div>
                    }
                )
            }
        </>
    )
}