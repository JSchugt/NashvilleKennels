import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { getAnimalById, updateAnimal } from "../modules/AnimalManager";
import { PropsAndState } from "../PropsAndState";
import "./AnimalForm.css";

export const AnimalEditForm = () => {
    const [animal, setAnimal] = useState({
        name: "",
        breed: "",
        locationId: 0,
        customerId: 0
    });

    const [isLoading, setIsLoading] = useState(false);

    const { animalId } = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...animal };
        stateToChange[evt.target.id] = evt.target.value;
        setAnimal(stateToChange)
    };

    const updateExisting = evt => {
        evt.preventDefault();
        setIsLoading(true)
        const editAnimal = {
            id: animalId,
            name: animal.name,
            breed: animal.breed,
            locationId: animal.locationId,
            customerId: animal.customerId
        }
        updateAnimal(editAnimal).then(() => history.push("/animals"))
    }





    useEffect(() => {
        getAnimalById(animalId)
            .then(animal => {
                setAnimal(animal);
                setIsLoading(false);
            })
    },[])

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="name">Animal name</label>
                        <input type="text" 
                        id="name" 
                        onChange={handleFieldChange} 
                        required 
                        autoFocus 
                        className 
                        className="form-control" 
                        value={animal.name} />

                        <label htmlFor="breed">Breed</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="breed"
                            value={animal.breed}
                        />
                    </div>
                    </fieldset>
                    <fieldset>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExisting}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}