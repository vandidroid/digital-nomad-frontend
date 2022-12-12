import { useEffect, useState } from "react";
import { DigitalNomadType } from "../types";
import DigitalNomad from "./DigitalNomad";
import "./DigitalNomads.scss";

function DigitalNomads() {
  const title = "Dinos";
  const [digitalNomads, setDigitalNomads] = useState([]);

  const fetchDigitalNomads = async () => {
    const result = await fetch("/api/nomads");
    const digitalNomads = await result.json();
    setDigitalNomads(digitalNomads);
  };

  useEffect(() => {
    fetchDigitalNomads();
  }, []);

  return (
    <div className="DigitalNomads">
      <h3 hidden>{title}</h3>
      <article>
        {digitalNomads.map((digitalNomad: DigitalNomadType, index: number) => (
          <div key={digitalNomad.id}>
            <DigitalNomad index={index} data={digitalNomad} />
          </div>
        ))}
      </article>
    </div>
  );
}

export default DigitalNomads;
