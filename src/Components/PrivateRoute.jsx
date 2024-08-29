import {Navigate} from "react-router-dom"
import { AuthContext } from "../Context/AuthContext";
import React from "react";



function PrivateRoute({children}) {

    const {AuthState} = React.useContext(AuthContext);

    const {isAuth} = AuthState;

    if(isAuth==false){
        return <Navigate to = "/login"/>
    }

    return children;


}

export default PrivateRoute;
