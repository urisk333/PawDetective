import "./Header.css";
import { FaPaw } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="home-header">
      <h1 className="title-header">
        Paw Detective <FaPaw />
      </h1>
      <div className="login-logo">
        <FaSignInAlt size={30} />
      </div>
    </header>
  );
};

export default Header;
