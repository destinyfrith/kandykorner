import React from "react"
import { Route, Redirect } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"

export const KandyKorner = () => (
        <>
        <Route
            render={() => {
                if (localStorage.getItem("kandy_customer")) {
                    return (
        <>
        <NavBar />
        <ApplicationViews />
        </>
                    )
} else {
    return <Redirect to="/login" />;
}
}}
/>

<Route path="/login">
<Login />
</Route>
<Route path="/register">
<Register />
</Route>
</>
)


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