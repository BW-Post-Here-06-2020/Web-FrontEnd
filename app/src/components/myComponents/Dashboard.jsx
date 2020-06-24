import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import MyPosts from "./MyPosts";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

export default function Dashboard() 
{
  const dispatch = useDispatch();

  useEffect( () => 
  {
    dispatch( dispatch =>
      {
        axiosWithAuth().get( "https://pokeapi.co/api/v2/pokemon" )
          .then( response => 
            {
              console.log( response );
              dispatch( { type : "FETCH FOR ITEMS", payload : "NEED RESPONSE DATA HERE" } );
            } )
          .catch( error => console.log( "ERROR FETCHING" ) );
      } );
  }, [] );

  return (
    <div className = "container">
      <MyPosts />
    </div>
  )
}
