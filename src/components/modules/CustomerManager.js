const remoteURL = "http://localhost:8088";

export const getCustomers = () => {
    return fetch(`${remoteURL}/customers`)
        .then(res => res.json())
}

// export const getCustomers = () => {
//     return fetch("http://localhost:8088/customers")
//         .then(res => res.json())
//         .then(setCustomers)
// }

// export const addCustomer = customerObj => {
//     return fetch("http://localhost:8088/customers", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(customerObj)
//     })
//         .then(getCustomers)
// }
