import React from "react";
import "./Posts.css";

const Posts2 = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
   
  return (
    <div>
      {posts.map((post) => (
        <div className="main">
          <article>
            <div className="wrapper ">
              <p className="title">{post.title} </p>
              <p className="summary"> {post.summary}</p>
              <p className="dates">{post.published}</p>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Posts2;
