import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalCard } from "./animal/AnimalCard"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { AnimalDetail } from "./animal/AnimalDetails"
import { AnimalForm } from "./animal/AnimalForm"
// import { LocationCard } from "./locations/LocationCard"
// import {CustomerCard} from "./customers/Customer"
// import { EmployeeCard } from "./employees/EmployeeCard"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            {/* <Route path="/animals">
                <AnimalCard  />
            </Route> */}
            <Route exact path="/animals">
                <AnimalList />
            </Route>
            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>
            <Route exact path="/animals/create">
                <AnimalForm />
            </Route>
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomerList />
                </Route>
            </CustomerProvider>
            <EmployeeProvider>
                <Route exact path="/employees">
                    <EmployeeList />
                </Route>
            </EmployeeProvider>
            {/* Use context  */}
        </>
    )
}