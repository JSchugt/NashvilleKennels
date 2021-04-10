import React, { useState } from "react"
import { Redirect, Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { AnimalDetail } from "./animal/AnimalDetails"
import { AnimalForm } from "./animal/AnimalForm"
import { LocationList } from "./locations/LocationList";
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
// import { LocationCard } from "./locations/LocationCard"
// import {CustomerCard} from "./customers/Customer"
// import { EmployeeCard } from "./employees/EmployeeCard"

export const ApplicationViews = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("kennel_customer", JSON.stringify(user))
        setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
    }
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
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/animals/:animalId(\d+)">
                <AnimalDetail />
            </Route>
            <Route exact path="/animals/create">
                <AnimalForm />
            </Route>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/locations">
                <LocationList />
            </Route>
            <Route path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>
            {/* Use context  */}
        </>
    )
}