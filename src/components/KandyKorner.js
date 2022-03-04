import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

export const KandyKorner = () => {
    return (
        <>
        <Route>
        <NavBar />
        <h1>Kandy Korner</h1>
        <ApplicationViews />
        </Route>
        </>
    )
}


// import { LocationList } from "./locations/LocationList"
// import { ProductList } from "./products/ProductList"

// export const KandyKorner = () => {

//     return (
//         <>
        
//         <h1> Kandy Korner</h1>

//         <h2>Locations</h2>
//         <LocationList />
            
//         <h2>Products</h2>
//         <ProductList />
        
//         </>
//     )
// }