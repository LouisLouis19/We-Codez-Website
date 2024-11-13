// BlogList.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./BlogPost.css"; // Import custom CSS for styling the blog posts

function BlogList() {
  const blogPosts = [
    {
      id: "learn-python",
      title: "Learning Python from Scratch: A Complete Guide for Beginners",
      readTime: "10-min read",
      image: "/images/python_blog.jpg", // Replace with an actual image URL
    },
    {
      id: "programming-language-to-learn",
      title: "What Programming Language to Learn? The Ultimate Guide",
      readTime: "8-min read",
      image: "/images/language_blog.jpg", // Replace with an actual image URL
    },
    {
      id: "learning-with-others",
      title: "The Importance of Learning with Others in Coding",
      readTime: "5-min read",
      image: "/images/learning_blog.jpg", // Replace with an actual image URL
    },
  ];

  return (
    <section className="blog-list">
      <div className="my-5">
        <h1 className="typewriter">We Codez Blogs</h1>{" "}
        {/* Typewriter effect on title */}
      </div>
      {blogPosts.map((post) => (
        <div key={post.id} className="blog-card">
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <div className="blog-meta">
            <span className="read-time">{post.readTime}</span>
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
