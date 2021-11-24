import React from 'react';
import './PawsProfile.css';
import { FaHome } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Map from '../Map/Map';
import { Paw, IMap } from '../Interfaces';
import Header from '../Header/Header'
const PawsProfile = () => {
  const location = useLocation();
  const history = useNavigate();
  // What is react router dom doing here?

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
  // What is all of this doing(?)

  return (
    <div>
      {/* should be same as dashboard header */}
      {/* <header className="form-header">
        <h1 className="title-header"> PAW PROFILE </h1>
        <div className="login-logo">
          <FaHome size={30} onClick={() => history.push('/')} />
        </div>
      </header> */}
      <div className="lg:mx-auto lg:w-djr">
        <Header />
        <div>
          <h1 className="title-header"> PAW PROFILE </h1>
          <p className="lost-found-title">{lostOrFound}</p>
          <img className="w-10" src={picture} alt={`a ${animal}`}></img>
          <p>{animal}</p>
          <h5>Description:</h5>
          <p>{description}</p>
          <h5>Location:</h5>
          <p>{address}</p>
          {/* <Map profileMarker={{ lat: lat, lng: long, time: new Date(date) }} /> */}
          <h3>Comment</h3>
          <p className="text-comment">...</p>
          <button className="pic-button">Send</button>
          {/* Non-functioning button (?) */}
        </div>
      </div>
    </div>
  );
};
export default PawsProfile;
