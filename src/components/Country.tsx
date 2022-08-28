import { CountryType } from "../types";
import "./Country.scss";

function Country(props : {data: CountryType}) {
    return <div className="Country">
        <h5>{props.data.id}. {props.data.name}</h5>
        
        <div>
        <div>Population: {props.data.population}</div>
        <div>Area: {props.data.area}</div>
        </div>
     
        </div>
}

export default Country;