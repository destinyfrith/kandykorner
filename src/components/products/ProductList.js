import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const ProductList = () => {
    const [products, updateProducts] = useState([])
    const history = useHistory()
    // set variables for new purchases

    // fetch products
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

// create an event that will construct a new object to add to the database
// follows same format as existing objects in purchases array
const purchaseCandy = () => {

    const newPurchase = {
            locationId: 1,
            employeeId: 1,
            customerId: parseInt(localStorage.getItem("kandy_customer"))
    }
// need new post method for new object
const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        
}

// return the new list of purchases from API and push to purchases array
return fetch("http://localhost:8088/purchases", fetchOption)
            .then(() => {
                history.push("/purchases")
            })
    }


    return (
        <>
            {
                products.map(
                    (productObject) => {
                        return <div key={`product--${productObject.id}`}>
                            <p>  {productObject.name} {" "}
                                {productObject.price} {" "}
                                Category: {productObject.productType.type} {""}
                                <button onClick={() => purchaseCandy(productObject)}>Purchase</button>
                                </p>
                        </div>
                    }
                )
            }
        </>
    )
}

// add a purchase button to the end of the product rendering
// onClick event that copies new purchase and invokes setter function