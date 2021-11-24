import React from 'react';
import './PawsForm.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ApiService from '../../ApiService';
import { useAuth0 } from '@auth0/auth0-react';
import Map from '../Map/Map';
import PicturesUpload from '../Pictures/Pictures';
import { PawsFormType } from '../Interfaces';

const PawsForm = () => {
  const [lostOrFound, setLostorFound] = useState('Lost');
  const [picture, setPicture] = useState('');
  const [animal, setAnimal] = useState('Dog');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [lat, setLat] = useState<Number>(0);
  const [long, setLong] = useState<Number>(0);
  const { user, getAccessTokenSilently } = useAuth0();
  const email = user?.email;

  async function postPawHandler(
    lostOrFound: string,
    picture: string,
    animal: string,
    description: string,
    location: string,
    lat: number,
    long: number
  ): Promise<void> {
    const token = await getAccessTokenSilently();
    ApiService.postPaws({
      lostOrFound,
      picture,
      animal,
      description,
      location,
      lat,
      long,
      token,
      email,
    });
  }

  const onSubmit = (data: PawsFormType) => {

    if (!description && !picture && !location) {
      alert('please fill in all the fields');
      // make feedback on button ... and don't clear the fields

      // handle bad request
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
    setPicture('');
    setDescription('');
    setLocation('');
  };

  const { handleSubmit } = useForm<PawsFormType>();
  return (
    <div>
      <h1>Lost or Found Paws</h1>
      <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="white-box">
          <label className="mr-8">Lost or Found?</label>
          <select
            value={lostOrFound}
            onChange={(e) => setLostorFound(e.target.value)}
            className="rounded border-pink-300 bg-gray-50"
          >
            <option value="Lost">Lost</option>
            <option value="Found">Found</option>
          </select>
        </div>
        <div className="white-box">
          {/* add a picture */}
          <div className="form-control">
            <label>Picture:</label>
            <PicturesUpload setPicture={setPicture} />
          </div>
        </div>
        {/* choose what kind of animal it is */}
        <div className="form-control white-box">
          <label>Animal: </label>
          <select value={animal} onChange={(e) => setAnimal(e.target.value)}>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bunny">Bunny</option>
            <option value="Bird">Bird</option>
            <option value="Other">Other</option>
          </select>
          {/* Refactor to search bar based on DB of animal types */}
        </div>
        {/* add a description of the animal and any other details */}
        <div className="form-control white-box">
          <label>Description: </label>
          <input
            type="text"
            placeholder="more details..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* choose the location you lost or found the pet */}
        <div className="form-control white-box">
          <label>Location: </label>
          <input
            type="text"
            placeholder="where?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* Refactor to actual location (GoogleAPI) */}
        </div>
        <div>
          <Map setLat={setLat} setLong={setLong} />
        </div>
        <button className="upload-button" type="submit">
          Submit
        </button>
      </form>
    </div>

  );
};

export default PawsForm;
