import { Link } from "react-router-dom";
import "./PawsItem.css";

const PawsItem = ({ paw }) => {
  return (
    <li>
      <Link
        to={{
          pathname: `/profile/${paw._id}`,
          state: paw,
        }}
        className="paws-item"
      >
        <p>{paw.lostOrFound}</p>
        <p>{paw.picture}</p>
        <p>{paw.animal}</p>
        <p>{paw.description}</p>
        {/* location not show before */}
        <p>{paw.location}</p>
        <p>{paw.lat} </p>
        <p>{paw.long} </p>
      </Link>
    </li>
  );
};

export default PawsItem;
