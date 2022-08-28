import React, { SyntheticEvent, useEffect, useState } from "react";
import { CountryType } from "../types";
import "./Countries.scss";
import Country from "./Country";

function Countries() {
  //  const arr = useState([]);
  //  const countries = arr[0];
  //  const setCountries = arr[1];

  const [countries, setCountries] = useState([]);
  const [nameFilter, setNameFilter] = useState("");

  const fetchCountries = async () => {
    const result = await fetch("/api/countries");
    const countries = await result.json();
    setCountries(countries);
  };

  const filterCountries = (e: React.FormEvent<HTMLInputElement>) => {
    setNameFilter(e.currentTarget.value);
  } 

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="Countries">
      <h3>Countries</h3>
      <section><input type="search" placeholder="Filter countries by name" value={nameFilter} onInput={filterCountries} /></section>
      
      <article>
      {countries.filter((country: CountryType) => country.name.includes(nameFilter)).map((country: CountryType) => (
        <div key={country.id}>
          <Country data={country} />
        </div>
      ))}
      </article>


    </div>
  );
}

export default Countries;
