import Header from '../Header/Header';
import PawsList from '../PawsList/PawList';
import apiService from '../../ApiService';
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Map from '../Map/Map';

import { useHistory } from 'react-router';
import './Dashboard.css';

const Dashboard = () => {
  const history = useHistory(); // Old version, perhaps alternative
  const [paws, setPaws] = useState([]); //Odd variable names
  const [filteredPaws, setFilteredPaws] = useState([]); //Odd variable names
  const { user } = useAuth0(); // what does this do

  const filterPaws = (lostOrFound) => {
    // Odd function syntax --> convert to ternary
    if (lostOrFound === 'Lost') {
      const lostList = paws.filter((paw) => paw.lostOrFound === lostOrFound);
      return setFilteredPaws(lostList);
    }
    if (lostOrFound === 'Found') {
      const foundList = paws.filter((paw) => paw.lostOrFound === lostOrFound);
      return setFilteredPaws(foundList);
    }
    return setFilteredPaws(paws);
  };
  useEffect(() => {
    apiService.getPaws().then((paws) => {

      const thePaws = paws;
      if (paws) {
        const sortedPaws = thePaws.sort((a, b) => {
          const pawA = new Date(a.date).getTime();
          const pawB = new Date(b.date).getTime();
          return pawB - pawA;
        });
        setPaws(sortedPaws);
        setFilteredPaws(sortedPaws);
      }
    });
  }, []);

  return (
    <div className="dashboard">
      <Header />

      {/* Test for use of history as button for form */}
      {/* Create context for props */}

      <button
        className="upload-pet-button"
        onClick={() => history.push('/form')}
      >
        Upload Pet
      </button>
      <div className="list-wrap">
        <div className="dashboard-list-container">
          <div>
            <h4 style={{ color: 'blue' }}>Find your pet</h4>
          </div>
          <Map pawsArray={paws} />

          <label>Lost or Found?</label>
          <div className="lost-found-bar">
            <select
              className="lost-found-scroll"
              onChange={(e) => filterPaws(e.target.value)}
            >
              {/* Check whether what we get back is what we want */}

              <option value="All">All</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>
          </div>
          <PawsList
            user={user}
            paws={filteredPaws}
            setPaws={setPaws}
            setFilteredPaws={setFilteredPaws}
          />
          {/* Check what comes back with no animals passed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
