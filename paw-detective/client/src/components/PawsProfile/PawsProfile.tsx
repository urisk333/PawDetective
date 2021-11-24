import React from 'react';
import './PawsProfile.css';
import { FaHome } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Map from '../Map/Map';
import { Paw, IMap } from '../Interfaces';

const PawsProfile = () => {
  const location = useLocation();
  // const history = useNavigate();
  // What is react router dom doing here?
  console.log(location);
  // const {
  //   lostOrFound,
  //   picture,
  //   animal,
  //   description,
  //   address = location.state.location,  // TODO: FIX
  //   lat,
  //   long,
  //   date,
  // } = location.state;
  // What is all of this doing(?)

  return (
    <div>
      {/* <div className="lg:mx-auto lg:w-djr">
        <div>
          <h1 className="title-header"> PAW PROFILE </h1>
          <p className="lost-found-title">{lostOrFound}</p>
          <img className="w-10" src={picture} alt={`a ${animal}`}></img>
          <p>{animal}</p>
          <h5>Description:</h5>
          <p>{description}</p>
          <h5>Location:</h5>
          <p>{address}</p>
          <Map
            setLat={undefined}
            setLong={undefined}
            pawsArray={undefined}
            profileMarker={{ lat: lat, lng: long, time: new Date(date) }}
          />
          <h3>Comment</h3>
          <p className="text-comment">...</p>
          <button className="pic-button">Send</button>
          {/* Non-functioning button (?) */}
      {/* </div> */}
      {/* // </div> */}
    </div>
  );
};
export default PawsProfile;
