import { Link } from "react-router-dom";
import "./PawsItem.css";
import apiService from "../../ApiService";
import { FaArrowUp } from "react-icons/fa";

const PawsItem = ({ paw, setPaws }) => {
  const deletePawsHandler = async () => {
    await apiService.deletePaws(paw._id);
    setPaws((prev) =>
      prev.filter((notDeletedPaw) => notDeletedPaw._id !== paw._id)
    );
  };

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
        <img src={paw.picture} alt={`a ${paw.animal}`}></img>
        <p>{paw.animal}</p>
        {/* <p>{paw.description}</p> */}
        <p>{paw.location}</p>
        {/* <p>{paw.lat} </p>
        <p>{paw.long} </p> */}
      </Link>
      <div className="topic_delete">
        <button className="delete_btn" onClick={deletePawsHandler}>
          <span role="img" aria-label="delete-button" className="delete-button">
            ❌
          </span>
        </button>
      </div>
    </li>
  );
};

export default PawsItem;

//   onClick={() => {
//     if (window.confirm("Are you sure you wish to delete this item?"))
//       deleteReviewHandler();
//   }}
