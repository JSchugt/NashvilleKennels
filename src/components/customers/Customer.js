import React from "react"
import "./customer.css"

export const CustomerCard = ({taco}) => (
    <section className="customer">
        <h3 className="customer__name">{taco.name}</h3>
        <div className="customer__address">Address: {taco.address}</div>
    </section>
)