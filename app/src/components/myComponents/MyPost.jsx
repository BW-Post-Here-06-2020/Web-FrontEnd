import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function ComponentName( props )
{
  const dispatch = useDispatch();

  const [ post, setPost ] = useState( { id : props.id, title : props.post.title, post : props.post.post } );


  const onChange = e => { setPost( { ...post, [ e.target.name ] : e.target.value } ) };

  const deletePost = e =>
  {
    console.log( e );

    console.log( post );
    // console.log( "Icons" );
    // console.log( props.id );
    //dispatch( { type : "DELETE_POST", action : e } )

  }

  const editPost = e =>
  {
    console.log( "Edit Post" );
    console.log( post );
  }

  return(
      <div className="col s12 m6">
        <div className="card">
          <div className="card-content myPost">
            <div><i className="material-icons top" onClick = { () => deletePost( post.id ) } >delete</i></div>
            <br/>
            <span className="card-title"> { post.title }</span>
            <p>{ post.post }</p>
            <br/>
            <div style = { { display : "flex", justifyContent : "center" } }>
              <a className = "waves-effect waves-light btn deep-purple darken-4 modal-trigger" href = { `#editForm${ post.id }` }>Edit Post</a>


              <div id = { `#editForm${ post.id }` } className ="modal">
                <div className ="modal-content">
                  <div className = "row">
                    <div className="input-field center offset-s3 col s7">
                      <input id="title" type="text" name = "title" value = { post.title } onChange = { onChange }/>
                      <label htmlFor = "username">Post Title</label>
                    </div>

                    <div className = "offset-s3 col s7">
                      <textarea id = "post" name = "post" rows="30" cols="80" value = { post.post } onChange = { onChange } ></textarea>
                    </div>
                  </div>
                </div> 
                  
                <div className ="modal-footer">
                  <a href = "#!" className="waves-effect waves-light btn-small deep-purple darken-4" onClick = { editPost }>Done</a>
                </div>
              </div>

              
              <h3>{ post.id } </h3>


            </div>
          </div>
      </div>
  </div>
  )
}

export default ComponentName