import React, { useEffect, useState } from "react";

export const PurchaseList = () => {
    const [purchases, updatePurchases] = useState([])


    // purpose is to watch for updates to purchases array and fetch them from API
    // want to display purchases for that specific customer
    // example: //ex: http://localhost:8088/purchases?customerId=97
    useEffect(
        () => {
            fetch("`http://localhost:8088/purchases`")
                .then((purchases) => {
                    updatePurchases(purchases)
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
                        if (purchase.customerId === parseInt(localStorage.getItem("kandy_customer"))) {
                            return <div key={`purchase--${purchase.id}`}>
                                <p>{purchase.product.name}: ${purchase.product.price}</p>
                            </div>
                        }
                    }
                )
            }
        </>
    )
}