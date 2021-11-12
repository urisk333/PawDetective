import "./PawsProfile.css";
import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const PawsProfile = () => {
  const location = useLocation();

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
        {/* <Link to="/" /> */}
        <h1 className="title-header"> PAW PROFILE </h1>
        <div className="login-logo">
          <FaHome size={30} />
        </div>
      </header>
      <p>{lostOrFound}</p>
      <p>{picture}</p>
      <p>{animal}</p>
      <p>{description}</p>
      <p>{address}</p>
      <p>{lat}</p>
      <p>{long}</p>
    </div>
  );
};
export default PawsProfile;

// {/*<div>

//       </div> */}
