import { useEffect, useState } from "react";
import { LocationType } from "../types";

function Locations() {
    const [locations, setLocations] = useState([]);

    const fetchLocations = async () => {
      const result = await fetch("/api/locations");
      const locations = await result.json();
      setLocations(locations);
    }

    useEffect(() => {
        fetchLocations();
    }, [])

    return (
        <div className="Locations">
         <h3>Locations</h3>    
         {locations.map((location : LocationType)=> (
            <div key={location.id}>{location.name + " (" + location.country.name + ")"}</div>
         ) )}
        </div>
    )
}
export default Locations;