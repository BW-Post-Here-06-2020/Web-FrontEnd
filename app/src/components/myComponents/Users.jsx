import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { axiosWithAuth } from "../../utils/axiosWithAuth"
import User from "./User"
import Preloader from "./Preloader"

export default function Users() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    dispatch(dispatch => {
      axiosWithAuth()
        .get("/")
        .then(response => {
          dispatch({
            type: "FETCH_USERS",
            payload: response.data,
          })
        })
        .catch(error => {
          console.log("ERROR FETCHING")
        })
        .finally(() => setLoading(false))
    })
  }, [])

  return (
    <div className="container">
      <div className="center myPost">
        <h2>Our Top Users</h2>
      </div>

      {loading ? (
        <Preloader />
      ) : (
        <ul className="collection">
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      )}
    </div>
  )
}
