import { useEffect, useState } from "react";

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
      {digitalNomads.map((dino: any) => (
        <div key={dino.id}>{dino.nickname}</div>
      ))}
    </div>
  );
}

export default DigitalNomads;
