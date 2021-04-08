import React, { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./Customer"
import { useHistory } from "react-router";

export const CustomerList = () => {

    // const { customers, getCustomers } = useContext(CustomerContext)
    const [customers, setCustomers] = useState();
    const history = useHistory();
    useEffect(() => {
        getCustomers()
    }, [])


    return (
        <div className="customers">
            {
                customers.map(customer => {
                    return <CustomerCard key={customer.id} taco={customer} />
                })
            }
        </div>
    )
}