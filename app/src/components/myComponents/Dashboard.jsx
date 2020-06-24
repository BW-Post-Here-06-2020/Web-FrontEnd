import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import MyPosts from "./MyPosts";

export default function Dashboard() 
{
  const posts = useSelector( state => state.savedPosts );

  console.log( posts );
  return (
    <div className = "container">
      <MyPosts />
    </div>
  )
}
