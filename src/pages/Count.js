import React, { Component } from "react";
import "../App.css";

import { connect } from "react-redux";
import { increment, decrement } from "../redux/action/countAction";
class Count extends Component {
  render() {
    const { count } = this.props;
    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count.count,
});

export default connect(mapStateToProps, { increment, decrement })(Count);
