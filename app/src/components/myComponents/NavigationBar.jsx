import React, { Fragment } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

export default function NavigationBar() {
  const signIn = useSelector(state => state.signIn)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const logOutOnClick = e => {
    if (localStorage.getItem("token")) localStorage.removeItem("token")
    dispatch({ type: "SIGN_OUT" })
  }

  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper deep-purple darken-4">
          <div className="container">
            <Link to="/create-post" className="brand-logo">
              SubReddit
            </Link>
            {signIn && (
              <Link to="#!" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
            )}

            {signIn && (
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/create-post">Create Post</Link>
                </li>

                <li>
                  <Link to="/dashboard">My Posts</Link>
                </li>

                <li>
                  <Link to="/users">View Users</Link>
                </li>

                <li>
                  <Link to="/my-account">My Account</Link>
                </li>

                <li>
                  <Link to="/" onClick={logOutOnClick}>
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>

      {signIn && (
        <ul className="sidenav" id="mobile-demo">
          <li>
            <div className="user-view">
              <div className="background">
                <img src={require("../images/background.jpg")} alt="Profile" />
              </div>
              <Link to="my-account">
                <i className="medium white-text material-icons">account_circle</i>
              </Link>
              <span className="white-text name">
                {" "}
                {user.username ? `${user.username.toUpperCase()}, Welcome Back!!!` : ""}
              </span>
            </div>
          </li>

          <li>
            <Link to="/create-post" className="waves-effect">
              <i className="material-icons">developer_board</i>Create Post
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="waves-effect">
              <i className="material-icons">developer_board</i>My Posts
            </Link>
          </li>

          <li>
            <Link to="/users" className="waves-effect">
              <i className="material-icons">developer_board</i>View Users
            </Link>
          </li>

          <li>
            <Link to="/" className="waves-effect" onClick={logOutOnClick}>
              <i className="material-icons">exit_to_app</i>Logout
            </Link>
          </li>
        </ul>
      )}
    </Fragment>
  )
}
