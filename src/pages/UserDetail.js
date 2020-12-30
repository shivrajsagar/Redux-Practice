import React from "react";
import { Link, Route, Router, Switch, useParams } from "react-router-dom";
import Posts from "../pages/Posts";
import Comments from "../pages/Comments";
const UserDetail = () => {
  const { id } = useParams();
  return (
    <div className="ui container segment">
      <h1>User Detail</h1>
      <h1>{id}</h1>
      <div className="ui grid">
        <div class="four wide column">
          <h1>
            <Link>Posts</Link>
          </h1>
        </div>
        <div class="four wide column">
          <h1>
            <Link to="/comments">Comments</Link>
          </h1>
        </div>
        <div class="four wide column">
          <h1>Todos</h1>
        </div>
        <div class="four wide column">
          <h1>Albums</h1>
        </div>
      </div>
      <Switch>
        <Route to="/posts" component={Posts} />
        <Route to="/comments" component={Comments} />
      </Switch>
    </div>
  );
};

export default UserDetail;
