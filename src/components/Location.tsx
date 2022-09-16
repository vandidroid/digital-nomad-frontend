import { LocationType } from "../types";
import "./Location.scss";

function Location(props: { data: LocationType; index: number }) {
  return (
    <div className="Location">
      <div className="cover" style={{backgroundImage:`url(${props.data.coverImage})`}}>
      </div>
      <h4>
        <span>{props.index + 1}</span>
        {props.data.name}
      </h4>
      <div>
        Country: {props.data.country.name}
      </div>
      <section>
        <a
          href={`https://en.wikipedia.org/wiki/${props.data.name}`}
          target="_blank"
        >
          W
        </a>
      </section>
    </div>
  );
}

export default Location;
