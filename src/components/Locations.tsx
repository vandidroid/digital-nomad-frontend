import React, { useEffect, useState } from "react";
import { LocationType } from "../types";
import Location from "./Location";
import "./Locations.scss";

function Locations() {
  const [locations, setLocations] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  const fetchLocations = async () => {
    const result = await fetch("/api/locations");
    const locations = await result.json();
    setLocations(locations);
  };

  const filterLocations = (e: React.FormEvent<HTMLInputElement>) => {
    setNameFilter(e.currentTarget.value);
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  return (
    <div className="Locations">
      <h3>Locations</h3>
      <section>
        <input
          type="search"
          placeholder="Filter locations by name"
          value={nameFilter}
          onInput={filterLocations}
        />
      </section>
      <article>
        {locations
          .filter((location: LocationType) =>
            location.name.toLowerCase().includes(nameFilter.toLowerCase())
          )
          .sort((location1: LocationType, location2: LocationType) =>
            location1.name.localeCompare(location2.name)
          )
          .map((location: LocationType, index: number) => (
            <div key={location.id}>
              <Location index={index} data={location} />
            </div>
          ))}
      </article>
    </div>
  );
}
export default Locations;
