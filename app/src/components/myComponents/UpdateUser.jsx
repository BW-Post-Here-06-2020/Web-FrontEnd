import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { axiosWithAuth } from "../../utils/axiosWithAuth"

export default function UpdateUser() {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [myUser, setMyUser] = useState({ username: user.username, password: "", new_password: "", phone: user.phone })

  const onSubmit = e => {
    e.preventDefault()
    console.log(myUser)

    dispatch(dispatch => {
      axiosWithAuth()
        .put(`/${user.id}`, myUser)
        .then(response => {
          console.log("Updated", response)
          dispatch({
            type: "UPDATE_USER",
            payload: response.data.updatedUser,
          })
        })
        .catch(error => {
          console.log("ERROR FETCHING")
        })
    })
  }
  const onChange = e => {
    setMyUser({ ...myUser, [e.target.name]: e.target.value })
  }

  return (
    <div className="container" style={{ marginTop: "130px" }}>
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
            <button className="waves-effect wider waves-light btn-small deep-purple darken-4">Login</button>
            <br />
          </div>
        </div>
      </form>
    </div>
  )
}
