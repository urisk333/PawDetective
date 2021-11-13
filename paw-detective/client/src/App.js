import "./App.css";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import PawsForm from "./components/PawsForm/PawsForm";
import PawsProfile from "./components/PawsProfile/PawsProfile";
import ProtectedRoute from "./auth/Protected-route";

function App() {
  return (
    <div className="App" style={{ backgroundImage: "url(../background.jpg)" }}>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/profile/:id" key={document.location.href}>
          <PawsProfile />
        </Route>

        <ProtectedRoute exact path="/form" component={PawsForm} />
      </Switch>
    </div>
  );
}

export default App;
