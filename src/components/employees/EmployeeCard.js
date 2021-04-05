import React from "react"
import "./Employee.css"

export const EmployeeCard = ({taco}) => (
    <section className="employee">
        <h3 className="employee__name">{taco.name}</h3>
        <div className="employee__address">{taco.address}</div>
    </section>
)