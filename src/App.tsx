import { MdHome, MdLocationCity, MdFlag, MdEmojiPeople } from "react-icons/md";

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
      title: "Home",
      path: "",
      icon: <MdHome />,
    },
    {
      title: "Countries",
      path: "countries",
      icon: <MdFlag />,
    },
    {
      title: "Locations",
      path: "locations",
      icon: <MdLocationCity />,
    },
    {
      title: "Digital Nomads",
      path: "dinos",
      icon: <MdEmojiPeople />,
    },
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
