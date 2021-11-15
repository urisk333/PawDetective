import PawsItem from "../PawsItem/PawsItem";
import "./PawsList.css";

const PawsList = ({ paws, setPaws }) => {
  const pawsList =
    paws.length &&
    paws.map((paw) => (
      <PawsItem paw={paw} key={paw.id} paws={paws} setPaws={setPaws} />
    ));
  return <ul className="list-container">{pawsList}</ul>;
};

export default PawsList;
