import "./PawsProfile.css";
import { FaHome } from "react-icons/fa";
import { useLocation, useHistory } from "react-router-dom";
import Map from "../Map/Map";
// import CommentsList from "../Comments/CommentsList";

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
    date,
  } = location.state;

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
        <img src={picture} alt={`a ${animal}`}></img>
        <p>{animal}</p>
        <p>{description}</p>
        <p>{address}</p>
        {/* <CommentsList currentUserId="12" /> */}
        <Map profileMarker={{ lat: lat, lng: long, time: new Date(date) }} />
      </div>
    </div>
  );
};
export default PawsProfile;
