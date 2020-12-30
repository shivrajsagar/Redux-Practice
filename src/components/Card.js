import React, { Component } from "react";
import { connect } from "react-redux";
import { DeletePost } from "../redux/action/postAction";

class Card extends Component {
  render() {
    const { data } = this.props;
    const { id, title, body } = data;
    return (
      <div className="card">
        <div className="content">
          <div className="header">{id}</div>
          <div className="meta">{title}</div>
          <div className="description">{body}</div>
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button"  >Update</div>
            <div
              className="ui basic red button"
              onClick={() => this.props.DeletePost({ id })}
            >
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { DeletePost })(Card);
