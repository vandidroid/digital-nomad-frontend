import {
  MdHome,
  MdLocationCity,
  MdFlag,
  MdEmojiPeople,
  MdLogin,
} from "react-icons/md";

import "./App.scss";
import Countries from "./components/Countries";
import Menu from "./components/Menu";
import Locations from "./components/Locations";
import DigitalNomads from "./components/DigitalNomads";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

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
    {
      title: "Login",
      path: "login",
      icon: <MdLogin />,
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
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
