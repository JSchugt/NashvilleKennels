import React from 'react';
import { Link } from 'react-router-dom';
import { firstLetterCase } from '../modules/helpers';
import "./Animal.css";

export const AnimalCard = ({  taco ,handleDeleteAnimal}) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name: <span className="card-petname">
                     {firstLetterCase( taco.name)}
                </span></h3>
                <p>Breed: {taco.breed}</p>
                <button type="button" onClick={() => handleDeleteAnimal(taco.id)}>Discharge</button>
                <Link to={`/animals/${taco.id}`}>
                    <button>Details</button>
                </Link>
            </div>
        </div>
    );
}