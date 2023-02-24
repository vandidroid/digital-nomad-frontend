import React, { useEffect, useState } from "react";
import { LocationType, SortDirection, SortType } from "../types";
import Loader from "./Loader";
import Location from "./Location";
import "./Locations.scss";

function Locations() {
  const [locations, setLocations] = useState<LocationType[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<LocationType[]>(
    []
  );
  const [nameFilter, setNameFilter] = useState("");

  const [sort, setSort] = useState<SortType>({
    criteria: "location",
    direction: SortDirection.ASC,
  });

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
    switch (sort.criteria) {
      case "locationName":
        return sort.direction * location1.name.localeCompare(location2.name);

      case "countryName":
        return (
          sort.direction *
          location1.country.name.localeCompare(location2.country.name)
        );

      default:
        return location1.name.localeCompare(location2.name);
    }
  };

  const changeSortCriteria = (e: React.FormEvent<HTMLSelectElement>) =>
    setSort({ ...sort, criteria: e.currentTarget.value });

  const changeSortDirection = (e: React.FormEvent<HTMLSelectElement>) =>
    setSort({
      ...sort,
      direction: Number(e.currentTarget.value),
    });

  useEffect(() => {
    setFilteredLocations(
      locations.filter(
        (location: LocationType) =>
          location.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
          location.country.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    );
  }, [nameFilter, locations]);

  useEffect(() => {
    fetchLocations();
  }, []);

  return locations.length ? (
    <div className="Locations">
      <h3 hidden>Locations</h3>
      <section>
        <input
          type="search"
          placeholder="Filter locations"
          value={nameFilter}
          onInput={filterLocations}
        />
      </section>
      <section className="flex-container">
        <div>
          {filteredLocations.length} of {locations.length} Locations
        </div>
        <div>
          <span>
            <label>Sort by</label>
          </span>
          <span>
            <select onChange={changeSortCriteria}>
              <option value="locationName">name</option>
              <option value="countryName">country name</option>
            </select>
          </span>
          <span>
            <select onChange={changeSortDirection}>
              <option value={SortDirection.ASC}>asc</option>
              <option value={SortDirection.DESC}>desc</option>
            </select>
          </span>
        </div>
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
  ) : (
    <Loader />
  );
}
export default Locations;
