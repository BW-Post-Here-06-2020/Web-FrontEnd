import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

export default function NavigationBar() 
{
  return (
    <Fragment>
      <nav>
        <div className = "nav-wrapper deep-purple darken-4">        
          <div className = "container" >
            <Link to = "/" className = "brand-logo">SubReddit</Link>
            <Link to = "#!" data-target="mobile-demo" className = "sidenav-trigger"><i className = "material-icons">menu</i></Link>

            <ul className = "right hide-on-med-and-down">
              <li><Link to = "/ViewPosts">View Posts</Link></li>
              <li><Link to = "/">Logout</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <ul className = "sidenav" id="mobile-demo">
        <li><Link to = "/ViewPosts">View Posts</Link></li>
        <li><Link to = "/">Logout</Link></li>
      </ul>
    </Fragment>
  );
}