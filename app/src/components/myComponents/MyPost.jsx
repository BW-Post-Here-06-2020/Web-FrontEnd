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

  const editPost = () =>
  {
    console.log( "Editing Post" );
  }

  return(
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content myPost">
            <div><i className="material-icons top" onClick = { deletePost } >delete</i></div>
            <br/>
            <span className="card-title"> { props.title }</span>
            <p>{ props.post }</p>
            <br/>
            <div style = { { display : "flex", justifyContent : "center" } }>
              <a className = "waves-effect waves-light btn deep-purple darken-4 modal-trigger" href = "#editForm" >Edit Post</a>


              <div id="editForm" className ="modal">
                <div className ="modal-content">
                  
                </div>
                <div className ="modal-footer">
                  <button href="#!" className ="modal-close waves-effect waves-green btn-flat">Agree</button>
                </div>
              </div>




            </div>
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