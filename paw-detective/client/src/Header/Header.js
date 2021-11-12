import "./Header.css";
import { FaPaw } from "react-icons/fa";

// import MainNav from "./main-nav";
import AuthNav from "../Account-setup/AuthNav";
// import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  // const { isAuthenticated } = useAuth0();

  return (
    <header className="home-header">
      <h1 className="title-header">
        Paw Detective <FaPaw />
      </h1>
      <div>
        <nav>
          <div>
            <div />
            {/* <MainNav /> */}
            <AuthNav />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
