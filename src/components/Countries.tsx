import { useEffect, useState } from "react";
import { CountryType } from "../types";
import "./Countries.scss";
import Country from "./Country";

function Countries() {
  //  const arr = useState([]);
  //  const countries = arr[0];
  //  const setCountries = arr[1];

  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const result = await fetch("/api/countries");
    const countries = await result.json();
    setCountries(countries);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="Countries">
      <h3>Countries</h3>
      {countries.map((country: CountryType) => (
        <div key={country.id}>
          <Country data={country} />
        </div>
      ))}
    </div>
  );
}

export default Countries;
