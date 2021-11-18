import PawsItem from '../PawsItem/PawsItem';
import './PawsList.css';

const PawsList = ({ paws, setPaws, setFilteredPaws, user }) => {
  const pawsList =
    paws.length &&
    paws.map((paw) => (
      <PawsItem
        user={user}
        paw={paw}
        key={paw.id}
        paws={paws}
        setPaws={setPaws}
        setFilteredPaws={setFilteredPaws}
      />
    ));
  // Move paws list length check to one level above, avoid doing map when not necessary
  // What happens when array of not animal objects gets passed in
  return (
    <ul className="list-container">
      <h4 className="click-add-h4">Click a pet to see more details</h4>
      {pawsList.length ? pawsList : <p>there no pets in this list😉</p>}
    </ul>
  );
};

export default PawsList;
