import { useEffect, useState } from "react";
import "./Countries.css";
import Country from "./Country";

function Countries() {

//  const arr = useState([]);
//  const countries = arr[0];
//  const setCountries = arr[1];

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("/countries")
      .then((result) => result.json())
      .then((result) => {
        setCountries(result);
      });
  }, []);

  return (
    <div className="Countries">
      <h3>Countries</h3>
      {countries.map((country) => (
        <div key={country.id}>
        <Country data={country} /> 
        </div>
      ))}
    </div>
  );
}

export default Countries;
