import React from "react";
import { Link } from "react-router-dom";

function ImportanceOfLearningWithOthers() {
  return (
    <div className="blog-card">
      <h3>The Importance of Learning with Others</h3>
      <p>
        Collaborative learning boosts your skills and motivation. Learn why
        studying with others is a game-changer.
      </p>
      <Link
        to="/blog/importance-of-learning-with-others"
        className="btn btn-primary"
      >
        Read More
      </Link>
    </div>
  );
}

export default ImportanceOfLearningWithOthers;
