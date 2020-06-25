import React from "react"

export default function CreatePost() {
  return (
    <div className="">
      <p className="login center">Create New Post</p>
      <div className="row">
        <div className="input-field center offset-s3 col s7">
          <input id="title" type="text" name="title" />
          <label htmlFor="username">Post Title</label>
        </div>

        <div className="offset-s3 col s7">
          <p>Post</p>
          <textarea id="post" name="post" rows="30" cols="80"></textarea>
        </div>
      </div>

      <div className="row">
        <div className="input-field offset-s4 col s10">
          <button className="waves-effect wider waves-light btn-small deep-purple darken-4">Predict</button>
          <br />
        </div>
      </div>
    </div>
  )
}
