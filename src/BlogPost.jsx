// BlogList.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./BlogPost.css"; // Import custom CSS for styling the blog posts

function BlogList() {
  const blogPosts = [
    {
      id: "learn-python",
      title: "Learning Python from Scratch",
      author: "Louis",
      date: "November 7, 2024",
    },
    {
      id: "programming-language-to-learn",
      title: "What Programming Language to Learn?",
      author: "Louis",
      date: "November 7, 2024",
    },
    {
      id: "learning-with-others",
      title: "The Importance of Learning with Others",
      author: "Louis",
      date: "November 7, 2024",
    },
  ];

  return (
    <section className="blog-list">
      <div className="my-5">
        <h1 className="text-center">We Codez Blogs</h1>
      </div>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card">
          <h2>{post.title}</h2>
          <div className="blog-meta">
            <span>By {post.author}</span> | <span>{post.date}</span>
          </div>
          <Link to={`/blog/${post.id}`} className="read-more">
            Read More
          </Link>
        </div>
      ))}
    </section>
  );
}

export default BlogList;
