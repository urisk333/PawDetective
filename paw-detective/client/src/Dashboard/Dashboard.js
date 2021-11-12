import Header from "../Header/Header";
import PawsList from "../PawsList/PawList";
import { useHistory } from "react-router";
import "./Dashboard.css";
// import PawsProfile from "../PawsProfile/PawsProfile";

const Dashboard = () => {
  const history = useHistory();
  return (
    <div className="dashboard">
      <Header />

      <button
        className="upload-pet-button"
        onClick={() => history.push("/form")}
      >
        Upload Pet
      </button>
      <p className="temporary-map">map</p>
      <PawsList />
    </div>
  );
};

export default Dashboard;
