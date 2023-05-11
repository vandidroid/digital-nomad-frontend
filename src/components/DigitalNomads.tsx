import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DigitalNomadType, SortDirection, SortType } from "../types";
import DigitalNomad from "./DigitalNomad";
import "./DigitalNomads.scss";
import Loader from "./Loader";
import { API_SERVER } from "../globals";

function DigitalNomads() {
  const title = "Digital Nomads";

  const navigate = useNavigate();

  const [digitalNomads, setDigitalNomads] = useState<DigitalNomadType[]>([]);
  const [filteredDigitalNomads, setFilteredDigitalNomads] = useState<
    DigitalNomadType[]
  >([]);

  const [nameFilter, setNameFilter] = useState("");

  const [sort, setSort] = useState<SortType>({
    criteria: "nickname",
    direction: SortDirection.ASC,
  });

  const fetchDigitalNomads = async () => {
    const token = sessionStorage.getItem("token");

    const result = await fetch(API_SERVER + "/api/nomads", {
      headers: { Authorization: "Bearer " + token },
    });

    if (result.status === 200) {
      const digitalNomads = await result.json();
      setDigitalNomads(digitalNomads);
      setFilteredDigitalNomads(digitalNomads);
    } else {
      navigate("/login");
    }
  };

  const filterDigitalNomads = (e: React.FormEvent<HTMLInputElement>) => {
    setNameFilter(e.currentTarget.value);
  };

  const digitalNomadComparator = (
    digitalNomad1: DigitalNomadType,
    digitalNomad2: DigitalNomadType
  ) => {
    switch (sort.criteria) {
      case "nickname":
        return (
          sort.direction *
          digitalNomad1.nickname.localeCompare(digitalNomad2.nickname)
        );
      case "firstName":
        return (
          sort.direction *
          digitalNomad1.firstName.localeCompare(digitalNomad2.firstName)
        );
      case "lastName":
        return (
          sort.direction *
          digitalNomad1.lastName.localeCompare(digitalNomad2.lastName)
        );
      case "email":
        return (
          sort.direction *
          digitalNomad1.email.localeCompare(digitalNomad2.email)
        );
      case "locationName":
        return (
          sort.direction *
          digitalNomad1.location.name.localeCompare(digitalNomad2.location.name)
        );
      case "countryName":
        return (
          sort.direction *
          digitalNomad1.location.country.name.localeCompare(
            digitalNomad2.location.country.name
          )
        );
      case "gender":
        return (
          sort.direction *
          digitalNomad1.gender.localeCompare(digitalNomad2.gender)
        );

      default:
        return digitalNomad1.nickname.localeCompare(digitalNomad2.nickname);
    }
  };
  const changeSortCriteria = (e: React.FormEvent<HTMLSelectElement>) => {
    setSort({ ...sort, criteria: e.currentTarget.value });
  };

  const changeSortDirection = (e: React.FormEvent<HTMLSelectElement>) => {
    setSort({
      ...sort,
      direction: Number(e.currentTarget.value),
    });
  };

  useEffect(() => {
    setFilteredDigitalNomads(
      digitalNomads.filter((digitalNomad: DigitalNomadType) =>
        digitalNomad.nickname.toLowerCase().includes(nameFilter.toLowerCase())
      )
    );
  }, [nameFilter, digitalNomads]);

  useEffect(() => {
    fetchDigitalNomads();
  }, []);

  return digitalNomads.length ? (
    <div className="DigitalNomads">
      <h3 hidden>{title}</h3>

      <section>
        <input
          type="search"
          placeholder="Filter digital nomads"
          value={nameFilter}
          onInput={filterDigitalNomads}
        />
      </section>
      <section className="flex-container">
        <div>
          {filteredDigitalNomads.length} of {digitalNomads.length} Nomads
        </div>
        <div>
          <span>
            <label>Sort by</label>
          </span>
          <span>
            <select onChange={changeSortCriteria}>
              <option value="nickname">nickname</option>
              <option value="firstName">first name</option>
              <option value="lastName">last name</option>
              <option value="gender">gender</option>
              <option value="email">email</option>
              <option value="locationName">location name</option>
              <option value="countryName">country name</option>
            </select>
          </span>
          <span>
            <select onChange={changeSortDirection}>
              <option value={SortDirection.ASC}>asc</option>
              <option value={SortDirection.DESC}>desc</option>
            </select>
          </span>
        </div>
      </section>

      <article>
        {filteredDigitalNomads
          .sort(digitalNomadComparator)
          .map((digitalNomad: DigitalNomadType, index: number) => (
            <div key={digitalNomad.id}>
              <DigitalNomad index={index} data={digitalNomad} />
            </div>
          ))}
      </article>
    </div>
  ) : (
    <Loader />
  );
}

export default DigitalNomads;
