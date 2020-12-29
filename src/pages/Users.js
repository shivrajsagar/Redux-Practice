import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal";
import { fetchUser, setModal } from "../redux/action/postAction";

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
    const { status } = this.state;
    return (
      <>
        <Modal status={status} onCancel={() => this.setState({ status: "" })} />
        {loading === true ? (
          <div class="ui segment">
            <p></p>
            <div class="ui active dimmer">
              <div class="ui loader"></div>
            </div>
          </div>
        ) : (
          <div className="ui links four cards">
            {users.map(({ name, email, phone, website, address }) => (
              <div class="card" onClick={this.onClick}>
                <div class="image">
                  <img src="/images/avatar2/large/matthew.png" alt="image3" />
                </div>
                <div class="content">
                  <div class="header">{name}</div>
                  <div class="meta">
                    <a href>{email}</a>
                  </div>
                  <div class="description">
                    {address.street},{address.city}
                  </div>
                </div>
                <div class="extra content">
                  <span class="right floated">{phone}</span>
                  <span>
                    <i class="user icon"></i>
                    {website}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.post.users,
  loading: state.post.loading,
});

export default connect(mapStateToProps, { fetchUser, setModal })(Users);
