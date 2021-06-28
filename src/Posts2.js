import React from "react";
import "./Posts2.css";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    
    <div className="container">
      {posts.map((post) => (
        <div className="grid ">
          <article className="content">
            <p className="title2">{post.title} </p>
            <p className="summary2"> {post.summary}</p>
            <p className="dates2">{post.published}</p>
          </article>
        </div>
      ))}
   
    </div>
  );
};

export default Posts;
