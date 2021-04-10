const remoteURL = "http://localhost:8088";

export const getAllEmployees = () =>{
    return fetch(`${remoteURL}/employees`)
        .then(res => res.json())
}