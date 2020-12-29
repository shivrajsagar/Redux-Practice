import React, { Component } from "react";

import { connect } from "react-redux";
import Card from "../components/Card";
import { fetchPost, createPost, postValue,DeletePost } from "../redux/action/postAction";
class Posts extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { title, body } = this.props;
    this.props.createPost({ title, body });
  };

  render() {
    const { data, loading, title, body, postdata } = this.props;

    return (
      <>
        <div className="ui container center">
          <h1>Post api</h1>
        </div>

        {/**create post section */}

        <div className="ui container placeholder segment form">
          <div className="field">
            <label> Title</label>

            <textarea
              placeholder="title"
              rows="2"
              value={title}
              onChange={(event) =>
                this.props.postValue({
                  prop: "title",
                  value: event.target.value,
                })
              }
            />
          </div>
          <div className="field">
            <label>Body</label>
            <textarea
              placeholder="body"
              value={body}
              onChange={(event) =>
                this.props.postValue({
                  prop: "body",
                  value: event.target.value,
                })
              }
            />
          </div>
          <button type="submit" className="ui button " onClick={this.onSubmit}>
            Submit
          </button>
        </div>
        {postdata === null ? null : (
          <div className="ui container segment four cards ">
            <Card data={postdata} />
          </div>
        )}
        {/**fetch post section */}
        {loading === true ? (
          <div className="ui container segment">
            <div className="ui active inverted dimmer">
              <div className="ui text loader">Loading</div>
            </div>
            <p></p>
          </div>
        ) : (
          <div className="ui container segment four cards">
            {data.map((data, index) => (
              <Card key={index.toString()} data={data}  />
            ))}
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = ({ post }) => {
  const { loading, data, title, body, postdata } = post;
  return {
    loading,
    data,
    title,
    body,
    postdata,
  };
};

export default connect(mapStateToProps, { fetchPost, createPost, postValue, DeletePost })(
  Posts
);
