import "./PawsForm.css";
import { useState } from "react";
import ApiService from "../ApiService";
import { FaHome } from "react-icons/fa";

const PawsForm = () => {
  const [lostOrFound, setLostorFound] = useState("Lost");
  const [picture, setPicture] = useState("");
  const [animal, setAnimal] = useState("Dog");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  function postPawHandler(
    lostOrFound,
    picture,
    animal,
    description,
    location,
    lat,
    long
  ) {
    ApiService.postPaws({
      lostOrFound,
      picture,
      animal,
      description,
      location,
      lat,
      long,
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      alert("pleaseee");
      return;
    }
    postPawHandler(
      lostOrFound,
      picture,
      animal,
      description,
      location,
      +lat,
      +long
    );
    setPicture("");
    setDescription("");
  };

  return (
    <div>
      <header className="form-header">
        <FaHome />
        <h1> LOST or FOUND PAWS </h1>
      </header>
      <form className="add-form" onSubmit={onSubmit}>
        {/* choose if it you lost a pet or found a lost one */}
        <div className="form-control">
          <label>Lost or Found?</label>
          <select
            value={lostOrFound}
            onChange={(e) => setLostorFound(e.target.value)}
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>
        </div>
        {/* add a picture */}
        <div className="form-control">
          <label>Picture</label>
          <input
            type="text"
            placeholder="add a picture of your pet"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        {/* choose what kind of animal it is */}
        <div className="form-control">
          <label>Animal</label>
          <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bunny">Bunny</option>
            <option value="Bird">Bird</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* add a description of the animal and any other details */}
        <div className="form-control">
          <label>Description</label>
          <input
            type="text"
            placeholder="describe your pet ad give any details you think are important..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* choose the location you lost or found the pet */}
        <div className="form-control">
          <label>Location</label>
          <input
            type="text"
            placeholder="where?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Lat</label>
          <input
            type="text"
            placeholder="where?"
            value={lat}
            onChange={(e) => setLat(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Long</label>
          <input
            type="text"
            placeholder="where?"
            value={long}
            onChange={(e) => setLong(e.target.value)}
          />
        </div>

        <input type="submit" value="Upload" />
      </form>
    </div>
  );
};

export default PawsForm;
