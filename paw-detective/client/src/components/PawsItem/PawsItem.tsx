import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './PawsItem.css';
import apiService from '../../ApiService';
import { Paw } from '../Interfaces';

interface IProps {
  paw: Paw;
  setPaws: Function;
  setFilteredPaws: Function;
}

const PawsItem: FunctionComponent<IProps> = ({
  paw,
  setPaws,
  setFilteredPaws,
}) => {
  // move delete function to parent || mock delete

  async function deletePawsHandler(): Promise<void> {
    // Check funtionality of delete

    await apiService.deletePaws(paw._id);
    // refactor to single function, setting both
    setPaws((prev: Paw[]) =>
      prev.filter((notDeletedPaw) => notDeletedPaw._id !== paw._id)
    );
    setFilteredPaws((prev: Paw[]) =>
      prev.filter((notDeletedPaw) => notDeletedPaw._id !== paw._id)
    );
  };

  return (
    <li key={paw.picture} className="white-box">
      <Link
        to={{
          pathname: `/profile/${paw._id}`,
          state: paw < Paw >, //TODO: Help request

        }}
        className="paws-item"
      >
        <p className="lost-found-title">{paw.lostOrFound}</p>
        <img
          className="max-w-lg mx-auto"
          src={paw.picture}
          alt={`a ${paw.animal} pic`}
        ></img>
        <p>{paw.animal}</p>
        <div className="descr-loc-container ml-6">
          <h5 className="ml-6">Description:</h5>
          <p className="text-left ml-8">{paw.description}</p>
          <h5 className="ml-6">Location:</h5>
          <p className="text-left ml-8">{paw.location}</p>
        </div>
      </Link>
      <div className="topic_delete">
        {
          <button
            data-testid="muhbtn"
            className="delete_btn"
            onClick={() => {
              if (window.confirm('Are you sure you wish to delete this item?'))
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
    </li >
  );
};

export default PawsItem;
