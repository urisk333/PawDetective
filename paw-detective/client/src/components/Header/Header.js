import './Header.css';
import { FaPaw } from 'react-icons/fa';

import AuthNav from '../../Account-setup/AuthNav';
{
  /* Nav stuff */
}

const Header = () => {
  return (
    <header className="home-header">
      <h1 className="title-header">
        Paw Detective <FaPaw />
      </h1>
      <div>
        <nav>
          <div>
            <div />
            {/* Unneeded div (?) */}
            <AuthNav />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
