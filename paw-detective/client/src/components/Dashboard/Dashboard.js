import Header from "../Header/Header";
import PawsList from "../PawsList/PawList";
import apiService from "../../ApiService";
import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Map from "../Map/Map";

import { useHistory } from "react-router";
import "./Dashboard.css";

const Dashboard = () => {
  const history = useHistory();
  const [paws, setPaws] = useState([]);
  const [filteredPaws, setFilteredPaws] = useState([]);
  const { user } = useAuth0();

  const filterPaws = (lostOrFound) => {
    if (lostOrFound === "Lost") {
      const lostList = paws.filter((paw) => paw.lostOrFound === lostOrFound);
      return setFilteredPaws(lostList);
    }
    if (lostOrFound === "Found") {
      const foundList = paws.filter((paw) => paw.lostOrFound === lostOrFound);
      return setFilteredPaws(foundList);
    }
    return setFilteredPaws(paws);
  };
  useEffect(() => {
    apiService.getPaws().then((paws) => {
      const sortedPaws = paws.sort((a, b) => {
        const pawA = new Date(a.date).getTime();
        const pawB = new Date(b.date).getTime();
        return pawB - pawA;
      });
      setPaws(sortedPaws);
      setFilteredPaws(sortedPaws);
    });
  }, []);

  return (
    <div className="dashboard">
      <Header />

      <button
        className="upload-pet-button"
        onClick={() => history.push("/form")}
      >
        Upload Pet
      </button>
      <div className="list-wrap">
        <div className="dashboard-list-container">
          <div>
            <h4 style={{ color: "blue" }}>Find your pet</h4>
          </div>
          <Map pawsArray={paws} />
          <label>Lost or Found?</label>
          <div className="lost-found-bar">
            <select
              className="lost-found-scroll"
              onChange={(e) => filterPaws(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>
          <PawsList
            user={user}
            paws={filteredPaws}
            setPaws={setPaws}
            setFilteredPaws={setFilteredPaws}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
