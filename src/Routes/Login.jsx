import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import React from "react";
import { Navigate } from "react-router-dom";

function Login() {


  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {AuthState,LoginUser} = React.useContext(AuthContext);
  const {isAuth} = AuthState;


  function submitDetails(e){

    e.preventDefault();

    let data={email, password}

    fetch(`https://reqres.in/api/login`, {
      method : "POST",
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify(data)
    }).then((res)=> res.json())
    .then((res)=> {
      LoginUser(res.token)

    })
    


  }

  if(isAuth== true){
    return <Navigate to="/dashboard"/>
  }


  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={submitDetails}>
        <div>
          <label>
            <input data-testid="email-input" type="email" placeholder="email" value = {email} onChange={(e)=> setEmail(e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" disabled={isAuth==true}>
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
      <div>
        <p>Used Reqres.in API for Login purpose</p>
        <p>Demo username : "eve.holt@reqres.in"</p>
        <p>Demo Password : "cityslicka"</p>
        <p>Please use these credentials for log in</p>
      </div>
    </div>
  );
}
export default Login;
