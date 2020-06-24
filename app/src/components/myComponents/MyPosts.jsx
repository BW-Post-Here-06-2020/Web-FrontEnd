import React from 'react'
import { useSelector, useDispatch } from "react-redux";

export default function MyPosts() 
{
  const post = useSelector( state => state.post );

  console.log( "Post =>", post );


  return (
    <div>
      
    </div>
  )
}
