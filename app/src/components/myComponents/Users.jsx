import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import User from "./User"

export default function Users() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(dispatch => {
      axiosWithAuth()
        .get("/")
        .then(response => {
          dispatch({
            type: "FETCH_USERS",
            payload: response.data,
          })
        })
        .catch(error => console.log("ERROR FETCHING"))
    })
  }, [])

  return (
    <div className="container">
      <div className="center myPost">
        <h2>Our Top Users</h2>
      </div>
      <ul className="collection">
        {users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  )
}
