import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllLocations } from "../modules/LocationManager";
import { LocationCard } from "./LocationCard";

export const LocationList = () => {

    const [locations, setLocations] = useState([]);

    const history = useHistory();

    const getLocations = () => {
        return getAllLocations().then(locationsFromApi => {
            setLocations(locationsFromApi);
        })
    }

    useEffect(() => {
        getLocations()
    }, []);

    return (
        <div className="locations_set">
            { locations.map(location => <LocationCard />)}
        </div>
    )
}