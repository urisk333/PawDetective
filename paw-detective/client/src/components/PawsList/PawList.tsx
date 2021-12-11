import { FunctionComponent } from 'react';
import PawsItem from '../PawsItem/PawsItem';
import './PawsList.css';
import { Paw } from '../Interfaces';

interface IPawsList {
  paws: Paw[],
  setPaws: Function,
  setFilteredPaws: Function,
  user: any | undefined
}

const PawsList: FunctionComponent<IPawsList> = ({ paws, setPaws, setFilteredPaws, user }) => {
  const pawsList =
    paws.length !== undefined &&
    paws.map((paw) => (
      <PawsItem
        // user={user}
        paw={paw}
        key={paw._id}

        // paws={paws}
        setPaws={setPaws}
        setFilteredPaws={setFilteredPaws}
      />
    ));
  // Move paws list length check to one level above, avoid doing map when not necessary
  // What happens when array of not animal objects gets passed in
  return (
    <div>
      <h4 className="click-add-h4">Click a pet to see more details</h4>
      <ul className="list-container">
        {pawsList && pawsList.length ? pawsList : <p>there no pets in this list😉</p>}
      </ul>
    </div>
  );
};

export default PawsList;
