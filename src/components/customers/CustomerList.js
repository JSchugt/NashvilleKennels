import React, { useEffect, useState } from "react"
import { CustomerCard } from "./Customer"
import { useHistory } from "react-router";
import { getCustomers } from "../modules/CustomerManager";

export const CustomerList = () => {

    // const { customers, getCustomers } = useContext(CustomerContext)
    const [customers, setCustomers] = useState([]);
    const history = useHistory();
    const getAllCustomers = () => {
        return getCustomers().then(customersFromAPi => {
            setCustomers(customersFromAPi)
        });
    }
    useEffect(()=>{
        getAllCustomers();
    },[])
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