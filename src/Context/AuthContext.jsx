import React from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({children}) {

    const [isAuth, setIsAuth] = React.useState(false);
    const [token, setToken] = React.useState(null);

    function LoginUser(val){
        setIsAuth(true);
        setToken(val);
    }

    function LogoutUser(){
        setIsAuth(false);
    }

    const AuthState={
        isAuth : isAuth,
        token : token
    }




    return <AuthContext.Provider value={{AuthState, LoginUser, LogoutUser}}>
        {children}
    </AuthContext.Provider>



}

export default AuthContextProvider;
