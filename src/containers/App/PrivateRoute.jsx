import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './auth';


const PrivateRoute = ({component: Component, ...rest}) => {
    // console.log(isEmailVerifyPath(rest))
    return (
        <Route {...rest} render={props => (
            isAuthenticated() ?  <Component {...props} />  : <Navigate to="/login" />
        )} />
    );
};

export default PrivateRoute;