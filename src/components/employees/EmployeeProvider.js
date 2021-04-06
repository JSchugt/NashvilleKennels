import React, { useState, createContext } from "react";

export const EmployeeContext = createContext()

export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch(`http://localhost:8088/employees`)
        // Error found employee.map not a function this was missing the "()"
            .then(res => res.json())
            .then(setEmployees)
    }

    const addEmployee = employeeObj => {
        return fetch(`http://localhost:8088/employees`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployee
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )

}