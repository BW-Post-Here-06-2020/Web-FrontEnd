import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function ComponentName( props )
{
  const dispatch = useDispatch();

  const deletePost = e =>
  {
    e.preventDefault();
    console.log( "Icons" );
    dispatch( { type : "DELETE_POST", action : props.id } )
  }

  return(
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content myPost">
            <div><i className="material-icons top" onClick = { deletePost } >delete</i></div>
            <br/>
            <span className="card-title"> { props.title }</span>
            <p>{ props.post }</p>
          </div>
          {/* <div class="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div> */}
      </div>
  </div>
  )
}

export default ComponentName