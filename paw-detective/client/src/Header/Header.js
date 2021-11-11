import "./Header.css";
import { FaPaw } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="home-header">
      <h1>
        Paw Detective <FaPaw />
      </h1>
      <FaSignInAlt />
    </header>
  );
};

export default Header;
