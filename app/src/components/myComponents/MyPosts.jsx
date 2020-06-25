import React from "react"
import { useSelector } from "react-redux"
import MyPost from "./MyPost"

export default function MyPosts() {
  const savePosts = useSelector(state => state.savedPosts)
  return (
    <div>
      <div className="center myPost">
        <h2>My Posts</h2>
      </div>
      <div className="myPosts row">
        {savePosts.length > 0 ? (
          savePosts.map((post, index) => <MyPost key={index} id={index} post={post} />)
        ) : (
          <div className="notFoundPage">
            <p className="myPost">No Posts Saved!!!</p>
          </div>
        )}
      </div>
    </div>
  )
}
