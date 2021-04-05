import React from "react"
import "./Animal.css"

export const AnimalCard = ({taco}) => (
    <section className="animal">
        <h3 className="animal__name">{taco.name}</h3>
        <div className="animal__breed">Breed: {taco.breed}</div>
    </section>
)