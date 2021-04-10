import React, { useState } from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

export const Kennel = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    const setAuthUSer = (user) => {
        sessionStorage.setItem("kennel_user", JSON.stringify(user));
        setIsAuthenticated(sessionStorage.getItem("kennel_user") !== null)
    }
    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("kennel_user") !== null)
    }
    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated}/>
            <ApplicationViews setAuthUSer={setAuthUSer} isAuthenticated={isAuthenticated}/>
        </>
    )
}