import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container">
      <div className="blogTemp">
        <h3>What is react Router? </h3>
        <p>
          React Router is a fully-featured client and server-side routing
          library for React, a JavaScript library for building user interfaces.
          React Router runs anywhere React runs; on the web, on the server with
          node.js, and on React Native.
        </p>
      </div>
      <div className="blogTemp">
        <h3>What is the command to install react router? </h3>
        <p>
          <small>
            Most modern React projects manage their dependencies using a package
            manager like npm or Yarn. To add React Router to an existing
            project, the first thing you should do is install the necessary
            dependencies with the tool of your choice:
          </small>
          <br />
          <br />

          <span className="focus">$ npm install react-router-dom</span>
        </p>
      </div>
      <div className="blogTemp">
        <h3>What is the command to install react router using yarn? </h3>
        <p>
          <small>
            Most modern React projects manage their dependencies using a package
            manager like npm or Yarn. To add React Router to an existing
            project, the first thing you should do is install the necessary
            dependencies with the tool of your choice:
          </small>
          <br />
          <br />

          <span className="focus">$ yarn add react-router</span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
