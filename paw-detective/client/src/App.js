import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PawsForm from './components/PawsForm/PawsForm';
import PawsProfile from './components/PawsProfile/PawsProfile';
import ProtectedRoute from './auth/Protected-route';
import { useLoadScript } from '@react-google-maps/api';
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import Loading from "./Account-setup/Loading";
import Header from './components/Header/Header';

function App() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
  });

  const { isAuthenticated } = useAuth0

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return <p>Loading Maps</p>;
  // Refactor into ternary & into alert

  return (
    <div className="bg-paws bg-small p-4 flex-col font-mono text-xl shadow-xl" >
      <div className="lg:mx-auto lg:w-djr bg-gray-200 rounded-3xl">
        <Header />
        <div className="m-4">
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/profile/:id" key={document.location.href} element={<PawsProfile />} />


          {/* <Route
          path="/form"
        element={withAuthenticationRequired(<PawsForm/>, {
          onRedirecting: () => <Loading />,
        })} />   */}
          <Route path="/form" element={isAuthenticated ? <Loading /> : <PawsForm />} />
          {/* Does auth0 function properly ??? */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
