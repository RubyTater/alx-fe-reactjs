// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Blog Post #{id}</h2>
      <p className="text-gray-600">This is the content of blog post {id}.</p>
    </div>
  );
};

export default BlogPost;
