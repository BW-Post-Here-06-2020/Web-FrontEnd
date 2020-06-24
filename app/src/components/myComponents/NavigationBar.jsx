import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function NavigationBar() 
{
  const signIn = useSelector( state => state.signIn );
  const dispatch = useDispatch();

  const logOutOnClick = e =>
  {
    if( localStorage.getItem( "token" ) )
      localStorage.removeItem( "token" );
    dispatch( { type : "SIGN_OUT" } )
  }

  return (
    <Fragment>
      <nav>
        <div className = "nav-wrapper deep-purple darken-4">        
          <div className = "container" >
            <Link to = "/" className = "brand-logo">SubReddit</Link>
            { signIn && <Link to = "#!" data-target="mobile-demo" className = "sidenav-trigger"><i className = "material-icons">menu</i></Link> }

            { signIn && <ul className = "right hide-on-med-and-down">
                                                  <li><Link to = "/ViewPosts">View Posts</Link></li>
                                                  <li><Link to = "/" onClick = { logOutOnClick }>Logout</Link></li>
                                                  </ul> }
          </div>
        </div>
      </nav>

      { signIn &&
      <ul className = "sidenav" id="mobile-demo">
          <li>
            <div className ="user-view">
              <div className ="background">
                <img src = { require( "../images/background.jpg" ) } />
              </div>
              <i className ="medium white-text material-icons">account_circle</i>
              <span className ="white-text name">Welcome Back!!!</span>
            </div>
          </li>

          <li><Link to = "/ViewPosts" className = "waves-effect"><i className ="material-icons">developer_board</i>View Posts</Link></li>
          <li><Link to = "/" className = "waves-effect" onClick = { logOutOnClick }><i className ="material-icons">exit_to_app</i>Logout</Link></li>
      </ul> }
    </Fragment>
  );
}