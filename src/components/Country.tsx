import { CountryType } from "../types";

function Country(props : {data: CountryType}) {
    return <div>{props.data.name}</div>
}

export default Country;