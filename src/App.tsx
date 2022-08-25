import "./App.scss";
import Countries from "./components/Countries";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import DigitalNomads from "./components/DigitalNomads";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const items = [
    {
      title: "Countries",
      path: "countries",
    },
    {
      title: "Locations",
      path:"locations",
    },
    {
     title: "Digital Nomads",
     path:"dinos",
    }
  ];

  return (
    <div className="App">
      <Menu items={items} />
      <main>
      <Routes>
        <Route path="countries" element={<Countries />} />
        <Route path="locations" element={<Locations />} />
        <Route path="dinos" element={<DigitalNomads />} />
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
    </div>
  );
}

export default App;
