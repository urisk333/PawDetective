import Header from "../Header/Header";
import PawsList from "../PawsList/PawList";
import apiService from "../../ApiService";
import { useState, useEffect } from "react";
import Map from "../Map/Map";

import { useHistory } from "react-router";
import "./Dashboard.css";

const Dashboard = () => {
  const history = useHistory();
  const [paws, setPaws] = useState([]);

  useEffect(() => {
    apiService.getPaws().then((paws) => {
      setPaws(paws);
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

      <PawsList paws={paws} setPaws={setPaws} />
      <Map pawsArray={paws} />
    </div>
  );
};

export default Dashboard;
