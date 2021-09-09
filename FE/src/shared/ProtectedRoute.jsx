import React, {useContext} from "react";
import { Redirect, Route } from "react-router-dom";
import UserContext from "../contexts/UserContext";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const {state} = useContext(UserContext);
    const {user} = state;
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                !!user ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
}

export default ProtectedRoute;
