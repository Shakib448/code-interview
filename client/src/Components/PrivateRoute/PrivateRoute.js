import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { userInformationData } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [userData, setUserData] = useContext(userInformationData);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userData.email || userData.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/google-login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
