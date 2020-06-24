import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function LoginForm() 
{
  let history = useHistory();

  const [ user, setUser ] = useState( { username : "", email : "", password : "" } );

  const onChange = e => setUser( { ...user, [ e.target.name ] : e.target.value  } );

  const onSubmit = e =>
  {
    e.preventDefault();
    console.log( "Values =>", user );
    // axiosWithAuth().post( "/api/createAccount", user )
    //   .then( response => 
    //     {
    //       M.toast( { html : `Account Created Successfully`, classes : "deep-purple darken-4" } );
    //       setUser( { username : "", email : "", password : "" } );
    //       history.push( "/" ); 
    //     } )
    //   .catch( error => M.toast( { html : "Account Already Exists", classes : "deep-purple darken-4" } ) );
  }

  const alreadyMember = e =>
  {
    e.preventDefault();
    history.push( "/" );
  }

  return (
    <div className = "container" style = { { marginTop : "130px" } } >
      <form className = "col s10" onSubmit = { onSubmit }>
        <div className="row">
          
          <div className="input-field center offset-s3 col s7">
            <input id="username" type="text" name = "username" value = { user.username } onChange = { onChange } />
            <label htmlFor = "username">Username</label>
          </div>

          <div className="input-field center offset-s3 col s7">
            <input id="email" type="email" name = "email" value = { user.email } onChange = { onChange } />
            <label htmlFor = "password">Email</label>
          </div>

          <div className="input-field center offset-s3 col s7">
            <input id="password" type="password" name = "password" value = { user.password } onChange = { onChange } />
            <label htmlFor = "password">Password</label>
          </div>

          <div className="row">
            <div className="input-field offset-s4 col s10">
              <button className="waves-effect wider waves-light btn-small deep-purple darken-4">Create Account</button>  
              <br />
            </div>
          </div>
         
          <div className = "row center lessMargin">
            <a className = "deep-purple-text center offset-s1 col s11" onClick = { alreadyMember }>Already a Member?</a>
          </div>
       
        </div>
      </form>
    </div>
  )
}