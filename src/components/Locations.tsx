import React, { useEffect, useState } from "react";
import { LocationType, SortDirection, SortType } from "../types";
import Location from "./Location";
import "./Locations.scss";

function Locations() {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<LocationType[]>(
    []
  );
  const [sort, setSort] = useState<SortType>({
    criteria: "location",
    direction: SortDirection.ASC,
  });
  const [nameFilter, setNameFilter] = useState("");

  const fetchLocations = async () => {
    const result = await fetch("/api/locations");
    const locations = await result.json();
    setLocations(locations);
    setFilteredLocations(locations);
  };

  const filterLocations = (e: React.FormEvent<HTMLInputElement>) => {
    setNameFilter(e.currentTarget.value);
  };

  const locationComparator = (
    location1: LocationType,
    location2: LocationType
  ) => {
    if (sort.criteria == "location" && sort.direction == SortDirection.ASC) {
      return location1.name.localeCompare(location2.name);
    }

    if (sort.criteria == "location" && sort.direction == SortDirection.DESC) {
      return location2.name.localeCompare(location1.name);
    }

    if (sort.criteria == "country" && sort.direction == SortDirection.ASC) {
      return location1.country.name.localeCompare(location2.country.name);
    }

    if (sort.criteria == "country" && sort.direction == SortDirection.DESC) {
      return location2.country.name.localeCompare(location1.country.name);
    }

    return location1.name.localeCompare(location2.name);
  };

  useEffect(() => {
    setFilteredLocations(
      locations.filter((location: LocationType) =>
        location.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    );
  }, [nameFilter]);

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
      <section>
        <span>
          {filteredLocations.length} of {locations.length} Locations
        </span>

        <span>
          <label>, sort by</label>
        </span>

        <span>
          <select
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              setSort({
                criteria: e.currentTarget.value,
                direction: sort.direction,
              })
            }
          >
            <option value={"location"}>name</option>
            <option value={"country"}>country name</option>
          </select>
        </span>
        <span>
          <select
            onChange={(e: React.FormEvent<HTMLSelectElement>) =>
              setSort({
                criteria: sort.criteria,
                direction: Number(e.currentTarget.value),
              })
            }
          >
            <option value={SortDirection.ASC}>asc</option>
            <option value={SortDirection.DESC}>desc</option>
          </select>
        </span>
      </section>
      <article>
        {filteredLocations
          .sort(locationComparator)
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
