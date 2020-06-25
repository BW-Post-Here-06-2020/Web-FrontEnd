import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import M from "materialize-css/dist/js/materialize.min.js"

function ComponentName(props) {
  useEffect(() => {
    M.AutoInit()
  }, [])

  const dispatch = useDispatch()

  const [post, setPost] = useState({
    id: props.id,
    title: props.post.title,
    post: props.post.post,
  })

  const onChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  const deletePost = () => {
    dispatch({ type: "DELETE_POST", payload: post.title })
  }

  const editPost = e => {}

  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-content myPost">
          <div>
            <i className="material-icons top" onClick={deletePost}>
              delete
            </i>
          </div>
          <br />
          <span className="card-title"> {post.title}</span>
          <p>{post.post}</p>
          <br />

          <ul id="dropdown1" className="dropdown-content">
            {props.post.prediction.map((prediction, index) => (
              <li key={index} className="collection-item">
                {prediction}
              </li>
            ))}
          </ul>

          <br />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a
              href="!#"
              className="dropdown-trigger waves-effect waves-light btn deep-purple darken-4 margin"
              data-target="dropdown1">
              Predictions
            </a>
            <a className="waves-effect waves-light btn deep-purple darken-4 modal-trigger" href={`#editForm${post.id}`}>
              Edit Post
            </a>
            <div id={`editForm${post.id}`} className="modal">
              <div className="modal-content">
                <div className="row">
                  <div className="input-field center offset-s3 col s7">
                    <input id="title" type="text" name="title" value={post.title} onChange={onChange} />
                    <label htmlFor="username">Post Title</label>
                  </div>

                  <div className="offset-s3 col s7">
                    <textarea id="post" name="post" rows="30" cols="80" value={post.post} onChange={onChange}></textarea>
                  </div>
                </div>
              </div>

              <div className="modal-footer">
                <a
                  href="#!"
                  className="modal-close waves-effect waves-light btn-small deep-purple darken-4"
                  onClick={editPost}>
                  Done
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentName
