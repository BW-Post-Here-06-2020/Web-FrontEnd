import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../../utils/axiosWithAuth";
import M from "materialize-css/dist/js/materialize.min.js";




export default function LoginForm() 
{
  let history = useHistory();

  const [ user, setUser ] = useState( { username : "", password : "" } );

  const onChange = e => setUser( { ...user, [ e.target.name ] : e.target.value  } );

  const onSubmit = e =>
  {
    e.preventDefault();
    // axiosWithAuth().post( "/api/login", user )
    //   .then( response => 
    //     {
    //       if( window.localStorage )
    //         window.localStorage.setItem( "token", response.data.payload );
    //       M.toast( { html : `Welcome Back ${ user.username }!`, classes : "deep-purple darken-4" } );
    //       setUser( { username : "", password : "" } );
    //       history.push( "/friends" ); 
    //     } )
    //   .catch( error => M.toast( { html : "Invalid Username and/or Password!", classes : "deep-purple darken-4" } ) );
 
    //For Now Push To Dashboard

    window.localStorage.setItem( "token", "testingToken" );
    history.push( "/dashboard" );
  }

  const createAccount = e =>
  {
    e.preventDefault();
    history.push( "/createAccount" );
  }

  return (
    <div className = "container" style = { { marginTop : "130px" } } >
      <form className = "col s10" onSubmit = { onSubmit }>
        <div className="row">
          
          <div className="input-field center offset-s3 col s7">
            <p className = "login">SubReddit Login</p>
          </div>

          <div className="input-field center offset-s3 col s7">
            <i className = "material-icons prefix icon">account_circle</i>
            <input id="username" type="text" name = "username" value = { user.username } onChange = { onChange } />
            <label htmlFor = "username">Username</label>
          </div>

          <div className="input-field center offset-s3 col s7">
            <i className ="material-icons prefix icon">lock</i>
            <input id="password" type="password" name = "password" value = { user.password } onChange = { onChange } />
            <label htmlFor = "password">Password</label>
            <a className = "right deep-purple-text" href="#">Forgot Password?</a>
          </div>

          <div className="row">
            <div className="input-field offset-s4 col s10">
              <button className="waves-effect wider waves-light btn-small deep-purple darken-4">Login</button>  
              <br />
            </div>
          </div>
         
          <div className = "row center lessMargin">
            <a className = "deep-purple-text center offset-s1 col s11" onClick = { createAccount }>Create User Account!</a>
          </div>
       
        </div>
      </form>
    </div>
  )
}