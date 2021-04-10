import React, { useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import { useHistory } from "react-router"
import { getAllEmployees } from "../modules/EmployeeManager"

export const EmployeeList = () => {
    // Found out I was using the wrong NSS book.
    // const [employees, getEmployees } = useContext(EmployeeContext)
    const [memployees, setEmployees] = useState([]);
    const history = useHistory();
    const getEmployees = () => {
        return getAllEmployees().then(employessFromAPi => {
            setEmployees(employessFromAPi)
        });
    };
    useEffect(() => {
        getEmployees()
    }, []);


    return (
        <>
            <div className="employees">
                {
                    memployees.map(employee => {
                        return <EmployeeCard key={employee.id} taco={employee} />
                    })
                }
            </div>
        </>
    )

}