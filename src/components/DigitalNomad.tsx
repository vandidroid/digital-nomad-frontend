import { DigitalNomadType } from "../types";
import "./DigitalNomad.scss";

function DigitalNomad(props: { data: DigitalNomadType; index: number }) {
  return (
    <div className="DigitalNomad">
      <h4>
        <span>{props.index + 1}</span>
        {props.data.nickname}
      </h4>
      <div>
        <div>
          Name: {props.data.firstName} {props.data.lastName}
        </div>
        <div>Gender: {props.data.gender}</div>
        <div>Email: {props.data.email}</div>
        <div>Location: {props.data.location.name}</div>
        <div>Country: {props.data.location.country.name}</div>
      </div>
    </div>
  );
}

export default DigitalNomad;
