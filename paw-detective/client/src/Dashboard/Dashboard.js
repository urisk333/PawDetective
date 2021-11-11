import Header from "../Header/Header";
import PawsList from "../PawsList/PawList";
import { useHistory } from "react-router";
// import PawsProfile from "../PawsProfile/PawsProfile";

const Dashboard = () => {
  const history = useHistory();
  return (
    <div className="dashboard">
      <Header />
      <button onClick={() => history.push("/form")}>Upload Pet</button>
      <PawsList />
    </div>
  );
};

export default Dashboard;
