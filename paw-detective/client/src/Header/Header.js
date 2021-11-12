import "./Header.css";
import { FaPaw } from "react-icons/fa";

// import MainNav from "./main-nav";
import AuthNav from "../Account-buttons/AuthNav";
// import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  // const { isAuthenticated } = useAuth0();

  return (
    <header className="home-header">
      <h1 className="title-header">
        Paw Detective <FaPaw />
      </h1>
      <div className="nav-container mb-3">
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <div className="navbar-brand logo" />
            {/* <MainNav /> */}
            <AuthNav />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
