import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import M from "materialize-css/dist/js/materialize.min.js"

export default function User(props) {
  const dispatch = useDispatch()

  const [user, setUser] = useState(props.user)

  useEffect(() => {
    M.AutoInit()
  }, [])

  const deleteUser = () => {
    dispatch(dispatch => {
      axiosWithAuth()
        .delete(`/${user.id}`)
        .then(response => {
          dispatch({
            type: "DELETE_USER",
            payload: props.user.id,
          })

          M.toast({
            html: `${user.username}, was removed!`,
            classes: "deep-purple darken-4",
          })
        })
        .catch(error =>
          M.toast({
            html: `Something Went Wrong!`,
            classes: "deep-purple darken-4",
          })
        )
    })
  }

  const onChange = e => {
    setUser({ ...user, username: e.target.value })
  }

  const editUser = e => {
    dispatch({
      type: "UPDATE_USER",
      payload: user,
    })
    dispatch(dispatch => {
      axiosWithAuth()
        .put(`/${user.id}`, { username: user.username, password: "Test1", new_password: "t1", phone: 1 })
        .then(response => {
          dispatch({
            type: "UPDATE_USER",
            payload: user,
          })
          M.toast({
            html: `${user.username}, was updated!`,
            classes: "deep-purple darken-4",
          })
        })
        .catch(error =>
          M.toast({
            html: `Something Went Wrong!`,
            classes: "deep-purple darken-4",
          })
        )
    })
  }

  return (
    <div>
      <li className="collection-item avatar">
        <i className="material-icons circle deep-purple darken-4">insert_chart</i>
        <a className="modal-trigger" href={`#editUser${user.id}`}>
          <span className="title"> {user.username} </span>
        </a>
        <p>Build Week was Amazing!!!</p>
        <a href="#!" className="secondary-content">
          <i className="material-icons myPost" onClick={deleteUser}>
            cancel
          </i>
        </a>
      </li>

      <div id={`editUser${user.id}`} className="modal">
        <div className="modal-content">
          <div className="row">
            <div className="input-field center offset-s3 col s7">
              <input id="username" type="text" name="username" value={user.username} onChange={onChange} />
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-light btn-small deep-purple darken-4"
            onClick={editUser}>
            Done
          </a>
        </div>
      </div>
    </div>
  )
}
