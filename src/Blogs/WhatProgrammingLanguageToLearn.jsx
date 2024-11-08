import React from "react";
import { Link } from "react-router-dom";

function WhatProgrammingLanguageToLearn() {
  return (
    <div className="blog-card">
      <h3>What Programming Language to Learn?</h3>
      <p>
        Confused about which programming language to start with? This post will
        help you make an informed choice.
      </p>
      <Link
        to="/blog/what-programming-language-to-learn"
        className="btn btn-primary"
      >
        Read More
      </Link>
    </div>
  );
}

export default WhatProgrammingLanguageToLearn;
