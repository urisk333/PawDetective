import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Account-setup/Loading";

const ProtectedRoute = ({ component, ...args }) => {
  return (
    <Route
      element={withAuthenticationRequired(component, {
        onRedirecting: () => <Loading />,
      })}
      {...args}
    />
  )
};

export default ProtectedRoute;
