import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import { useHistory } from "react-router-dom"
import M from "materialize-css/dist/js/materialize.min.js"

export default function UpdateUser() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [myUser, setMyUser] = useState({ username: user.username, password: "", new_password: "", phone: user.phone })
  const history = useHistory()

  const onSubmit = e => {
    e.preventDefault()

    dispatch(dispatch => {
      axiosWithAuth()
        .put(`/${user.id}`, myUser)
        .then(response => {
          dispatch({
            type: "UPDATE_USER",
            payload: response.data.updatedUser,
          })
          M.toast({
            html: `Account Updated!`,
            classes: "deep-purple darken-4",
          })
          history.push("/create-post")
        })
        .catch(error => {
          M.toast({
            html: `Check Password`,
            classes: "deep-purple darken-4",
          })
        })
    })
  }
  const onChange = e => {
    setMyUser({ ...myUser, [e.target.name]: e.target.value })
  }

  return (
    <div className="container">
      <form className="col s10" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field center offset-s3 col s7">
            <p className="login">Account Information</p>
          </div>
        </div>

        <div className="row">
          <div className="input-field center offset-s3 col s7">
            <i className="material-icons prefix icon">account_circle</i>
            <input id="username" type="text" name="username" value={myUser.username} onChange={onChange} />
          </div>
        </div>

        <div className="row">
          <div className="input-field center offset-s3 col s7">
            <i className="material-icons prefix icon">phone</i>
            <input id="phone" type="text" name="phone" value={myUser.phone} onChange={onChange} />
          </div>
        </div>

        <div className="row">
          <div className="input-field center offset-s3 col s7">
            <i className="material-icons prefix icon">lock</i>
            <input id="password" type="password" name="password" value={myUser.password} onChange={onChange} />
            <label htmlFor="password">Current Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field center offset-s3 col s7">
            <i className="material-icons prefix icon">lock</i>
            <input
              id="new_password"
              type="password"
              name="new_password"
              value={myUser.new_password}
              onChange={onChange}
            />
            <label htmlFor="new_password">New Password</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field offset-s4 col s10">
            <button className="waves-effect wider waves-light btn-small deep-purple darken-4">Update Information</button>
            <br />
          </div>
        </div>
      </form>
    </div>
  )
}
