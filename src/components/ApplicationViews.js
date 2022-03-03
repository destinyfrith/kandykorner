import React from "react";
import { Route } from "react-router-dom"
import { ProductList } from "./products/ProductList";
import { LocationList } from "./locations/LocationList"
import { EmployeeList } from "./employees/EmployeeList";

// this is controlling what you see when you click each indiviudal link on the nav bar
export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>
            <Route path="/products">
                <ProductList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
        </>
    )
}