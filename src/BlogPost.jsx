// BlogList.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./BlogPost.css"; // Import custom CSS for styling the blog posts
import img1 from "./Pictures/Blog-Learning_Python_From_Scratch.jpg";
import img2 from "./Pictures/Blog-What_Programming_Language.jpg";
import img3 from "./Pictures/Blog-Learning_With_Others.jpg";

function BlogList() {
  const blogPosts = [
    {
      id: "learn-python",
      title: "Learning Python for Beginners: A Complete Guide",
      readTime: "3-min read",
      image: img1,
    },
    {
      id: "programming-language-to-learn",
      title: "What Programming Language to Learn?",
      readTime: "8-min read",
      image: img2,
    },
    {
      id: "learning-with-others",
      title: "The Importance of Learning Coding with Others",
      readTime: "5-min read",
      image: img3,
    },
  ];

  return (
    <section className="blog-list">
      {/* Section Title */}
      <div className="my-5">
        <h1 className="typewriter section-title">We Codez Blogs</h1>{" "}
      </div>

      {/* Cards Container */}
      <div className="cards-container">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <img src={post.image} alt={post.title} />
            <h4>{post.title}</h4>
            <div className="blog-meta">
              <span className="read-time">{post.readTime}</span>
            </div>
            <Link to={`/blog/${post.id}`} className="read-more">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogList;
