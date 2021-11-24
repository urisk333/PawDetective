import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import PawsForm from './components/PawsForm/PawsForm';
import PawsProfile from './components/PawsProfile/PawsProfile';
import ProtectedRoute from './auth/Protected-route';
import { useLoadScript } from '@react-google-maps/api';
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Account-setup/Loading";



function App() {

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_API_KEY,
  });

  if (loadError) return 'Error loading maps';
  if (!isLoaded) return <p>Loading Maps</p>;
  // Refactor into ternary & into alert


  return (
    <div className="bg-paws bg-small p-1  flex  font-mono text-xl shadow-xl" >
      <Routes>
        {/* Switch is deprecated*/}
        <Route path="/" element={<Dashboard />}/>
          {/* <Dashboard /> */}
        {/* </Route> */}
        <Route path="/profile/:id" key={document.location.href} element={<PawsProfile />} />
          {/* document.location.href (?)  */}

          {/* <PawsProfile /> */}
        {/* </Route> */}

        {/* <ProtectedRoute path="/form" component={PawsForm} /> */}
        <Route
      element={withAuthenticationRequired(PawsForm, {
        onRedirecting: () => <Loading />,
      })} />
      </Routes>
    </div>
  );
}

export default App;
