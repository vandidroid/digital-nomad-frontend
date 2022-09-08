import { CountryType } from "../types";
import "./Country.scss";

function Country(props: { data: CountryType, index: number }) {
  return (
    <div className="Country">
      <h4>
        <span>
        {props.index + 1}
        </span>
        {props.data.name}
        <img src={props.data.flag} />
      </h4>
      <div>
        <div>Capital: {props.data.capital}</div>
        <div>Population: {props.data.population}</div>
        <div>Area: {props.data.area}</div>
      </div>
      <section><a href={`https://en.wikipedia.org/wiki/${props.data.name}`} target="_blank">W</a></section>
    </div>
  );
}

export default Country;
