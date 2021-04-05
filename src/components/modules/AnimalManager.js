const remostUrl = "http://localhost:5002"

export const getAllAnimals = () => {
    return fetch(`${remostUrl}/animals`).then(result => result.json())
}