import "./PawsProfile.css";
import { FaHome } from "react-icons/fa";
import { useLocation, useHistory } from "react-router-dom";

const PawsProfile = () => {
  const location = useLocation();
  const history = useHistory();

  const {
    lostOrFound,
    picture,
    animal,
    description,
    address = location.state.location,
    lat,
    long,
  } = location.state;
  console.log(address);
  return (
    <div>
      <header className="form-header">
        <h1 className="title-header"> PAW PROFILE </h1>
        <div className="login-logo">
          <FaHome size={30} onClick={() => history.push("/")} />
        </div>
      </header>
      <div className="profile-container">
        <p>{lostOrFound}</p>
        <p>{picture}</p>
        <p>{animal}</p>
        <p>{description}</p>
        <p>{address}</p>
        <p>{lat}</p>
        <p>{long}</p>
      </div>
    </div>
  );
};
export default PawsProfile;
