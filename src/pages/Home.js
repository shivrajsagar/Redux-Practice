import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="ui container segment">
      <h1>
        <Link to="/posts">Posts</Link>
      </h1>
      <h1>
        <Link to="/users">Users</Link>
      </h1>
      <h1>
        <Link to="/weather">Weather</Link>
      </h1>
    </div>
  );
};

export default Home;
