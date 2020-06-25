import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

import Preloader from "./Preloader"
import M from "materialize-css/dist/js/materialize.min.js"

export default function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    body: "",
  })

  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const history = useHistory()

  const onChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const predict = e => {
    e.preventDefault()
    setLoading(true)
    dispatch(dispatch => {
      axios
        .post("https://lsbwposthere.herokuapp.com/predict", post)
        .then(response => {
          dispatch({ type: "FETCH_POSTS", payload: response.data })
          history.push("/dashboard")
          M.toast({
            html: `Predictions Available!`,
            classes: "deep-purple darken-4",
          })
        })
        .catch(error =>
          M.toast({
            html: `Something Went Wrong!!!`,
            classes: "deep-purple darken-4",
          })
        )
        .finally(() => setLoading(false))
    })
  }

  return (
    <div className="">
      {loading && <Preloader />}
      <p className="login center">Create New Post</p>
      <div className="row">
        <div className="input-field center offset-s3 col s7">
          <input id="title" type="text" name="title" value={post.title} onChange={onChange} />
          <label htmlFor="title">Post Title</label>
        </div>

        <div className="offset-s3 col s7">
          <label htmlFor="body">Post Body</label>
          <textarea id="body" name="body" rows="30" cols="80" value={post.body} onChange={onChange}></textarea>
        </div>
      </div>

      <div className="row">
        <div className="input-field offset-s4 col s10">
          <button className="waves-effect wider waves-light btn-small deep-purple darken-4" onClick={predict}>
            Predict
          </button>
          <br />
        </div>
      </div>
    </div>
  )
}
