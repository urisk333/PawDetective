import './Header.css';
import { FaPaw } from 'react-icons/fa';

import AuthNav from '../../Account-setup/AuthNav';

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full h-16 bg-blue-200 border-dotted px-7 text-xl tracking-wide shadow-xl rounded-xl">
      <h1 className="flex items-center">
        <a className="flex items-center"href="/">
          Paw Detective <FaPaw className="ml-2.5"/>
        </a>
      </h1>
        <nav>
            <AuthNav />
        </nav>
    </div>
  );
};

export default Header;
