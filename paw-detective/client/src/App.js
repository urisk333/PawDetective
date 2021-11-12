import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import { Route, Switch } from "react-router-dom";
import PawsForm from "./PawsForm/PawsForm";
import PawsProfile from "./PawsProfile/PawsProfile";

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

        <Route exact path="/form">
          <PawsForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
