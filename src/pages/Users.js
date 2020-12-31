import React, { Component } from "react";
import { connect } from "react-redux";
// import Modal from "../components/Modal";
import { fetchUser, setModal } from "../redux/action/postAction";

import { image } from "faker";
import { Link } from "react-router-dom";

class Users extends Component {
  state = {
    status: "",
  };
  componentDidMount() {
    this.props.fetchUser();
  }
  onClick = () => {
    this.setState({ status: "active" });
  };
  render() {
    const { users, loading } = this.props;
    // const { status } = this.state;
    return (
      <div className="ui container segment ">
        <h1>Users</h1>
        {/* <Modal status={status} onCancel={() => this.setState({ status: "" })} /> */}
        {loading === true ? (
          <div className="ui container segment">
            <p></p>
            <div className="ui active dimmer">
              <div className="ui loader"></div>
            </div>
          </div>
        ) : (
          <div className="ui links four cards">
            {users.map(
              ({ id, name, email, phone, website, address }, index) => (
                <Link
                  to={`/userdetail/${id}`}
                  className="card"
                  key={index.toString()}
                >
                  <div className="image">
                    <img src={image.image()} alt="image3" />
                  </div>
                  <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                      <a href="@">{email}</a>
                    </div>
                    <div className="description">
                      {address.street},{address.city}
                    </div>
                  </div>
                  <div className="extra content">
                    <span className="right floated">{phone}</span>
                    <span>
                      <i className="user icon"></i>
                      {website}
                    </span>
                  </div>
                </Link>
              )
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.post.users,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { fetchUser, setModal })(Users);
