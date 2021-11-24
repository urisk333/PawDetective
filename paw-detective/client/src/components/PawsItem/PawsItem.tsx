import React, { FunctionComponent, RefAttributes } from 'react';
import { Link } from 'react-router-dom';
import './PawsItem.css';
import apiService from '../../ApiService';
import { Paw } from '../Interfaces';

interface IProps {
  paw: Paw,
  setPaws: Function,
  setFilteredPaws: Function
}

const PawsItem: FunctionComponent<IProps> = ({ paw, setPaws, setFilteredPaws }) => {
  // move delete function to parent || mock delete

  async function deletePawsHandler(): Promise<void> {
    // Check funtionality of delete

    await apiService.deletePaws(paw._id);
    // refactor to single function, setting both
    setPaws((prev: Paw[]): Paw[] =>
      prev.filter((notDeletedPaw: Paw) => notDeletedPaw._id !== paw._id)
    );
    setFilteredPaws((prev: Paw[]): Paw[] =>
      prev.filter((notDeletedPaw: Paw) => notDeletedPaw._id !== paw._id)
    );
  };

  return (
    <li key={paw.picture} className="drop-shadow-xl border-2 rounded-lg border-white bg-gray-700 bg-opacity-25 my-7">
      <Link
        to={{
          pathname: `/profile/${paw._id}`,
          // state: paw,
        }}
        className="paws-item"
      >
        <p className="lost-found-title">{paw.lostOrFound}</p>
        <img
          className="w-20 h-20 mx-auto"
          src={paw.picture}
          alt={`a ${paw.animal} pic`}
        ></img>
        <p>{paw.animal}</p>
        <div className="descr-loc-container">
          <h5>Description:</h5>
          <p>{paw.description}</p>
          <h5>Location:</h5>
          <p>{paw.location}</p>
        </div>
      </Link>
      <div className="topic_delete">
        {
          <button
            data-testid="muhbtn"
            className="delete_btn"
            onClick={() => {
              // if (window.confirm('Are you sure you wish to delete this item?'))
              // Compatiblety issue
              void deletePawsHandler();
            }}
          >
            <span
              role="img"
              aria-label="delete-button"
              className="delete-button"
            >
              ❌
            </span>
          </button>
        }
      </div>
    </li>
  );
};

export default PawsItem;
