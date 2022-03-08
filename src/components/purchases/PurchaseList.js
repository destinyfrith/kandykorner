import React, { useEffect, useState } from "react";

export const PurchaseList = () => {
    const [purchases, updatePurchases] = useState([])


    // purpose is to watch for updates to purchases array and fetch them from API
    // want to display purchases for that specific customer
    // example: //ex: http://localhost:8088/purchases?customerId=97
    useEffect(
        () => {
            fetch("`http://localhost:8088/purchases?customerId=1`")
                .then((purchaseArray) => {
                    updatePurchases(purchaseArray)
                })
        },
        []
    )

    // display a list of purchases for current customer
    //need to match customer.id with current customer
    return (
        <>
            {
                purchases.map(
                    (purchase) => {
                        return <p key={`purchase--${purchase.id}`}>{purchase.customer.id === parseInt(localStorage.getItem("kandy_customer")) ? `${purchase.product.name} ${purchase.product.price}` : ""}</p>
                    }
                )
            }
        </>
    )
}