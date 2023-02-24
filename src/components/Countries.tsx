import React, { useEffect, useState } from "react";
import { CountryType, SortDirection, SortType } from "../types";
import "./Countries.scss";
import Country from "./Country";
import Loader from "./Loader";

function Countries() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<CountryType[]>([]);
  const [nameFilter, setNameFilter] = useState("");

  const [sort, setSort] = useState<SortType>({
    criteria: "name",
    direction: SortDirection.ASC,
  });

  const fetchCountries = async () => {
    const result = await fetch("/api/countries");
    const countries = await result.json();
    setCountries(countries);
    setFilteredCountries(countries);
  };

  const filterCountries = (e: React.FormEvent<HTMLInputElement>) => {
    setNameFilter(e.currentTarget.value);
  };

  const countryComparator = (country1: CountryType, country2: CountryType) => {
    switch (sort.criteria) {
      case "name":
        return sort.direction * country1.name.localeCompare(country2.name);
      case "area":
        return sort.direction * (country1.area - country2.area);
      case "population":
        return sort.direction * (country1.population - country2.population);
      default:
        return country1.name.localeCompare(country2.name);
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
    setFilteredCountries(
      countries.filter((country: CountryType) =>
        country.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    );
  }, [nameFilter, countries]);

  useEffect(() => {
    fetchCountries();
  }, []);

  return countries.length ? (
    <div className="Countries">
      <h3 hidden>Countries</h3>

      <section>
        <input
          type="search"
          placeholder="Filter countries by name"
          value={nameFilter}
          onInput={filterCountries}
        />
      </section>
      <section className="flex-container">
        <div>
          {filteredCountries.length} of {countries.length} Countries
        </div>
        <div>
          <span>
            <label>Sort by</label>
          </span>
          <span>
            <select onChange={changeSortCriteria}>
              <option value="name">name</option>
              <option value="area">area</option>
              <option value="population">population</option>
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
        {filteredCountries
          .sort(countryComparator)
          .map((country: CountryType, index: number) => (
            <div key={country.id}>
              <Country index={index} data={country} />
            </div>
          ))}
      </article>
    </div>
  ) : (
    <Loader />
  );
}

export default Countries;
