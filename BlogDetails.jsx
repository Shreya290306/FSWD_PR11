import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const blogData = {
  1: { title: "Understanding React Router", content: "React Router is used for routing in React apps..." },
  2: { title: "React Hooks - A Complete Guide", content: "Hooks allow functional components to use state and lifecycle..." },
  3: { title: "State Management in React", content: "State management is an essential aspect of React development..." },
};

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogData[id];

  if (!blog) {
    return <h2>Blog not found!</h2>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default BlogDetails;
