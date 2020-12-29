import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchWeather } from "../redux/action/weatherAction";

class Weather extends Component {
  state = {
    lat: 0,
    long: 0,
    message: "",
  };
  componentDidMount() {
   const {lat, long} =this.props;
    this.props.fetchWeather({ lat, long});
  }
  

  renderWeather() {
    const { weather } = this.props;
    console.log(weather);
    const { base, name, id } = weather;

    // eslint-disable-next-line eqeqeq
    if (weather.length == 0) {
      return <p>Loading</p>;
    } else {
      return (
        <div key={id}>
          <p>ID: {id} </p>
          <p>Base: {base}</p>
          <p>Name: {name}</p>
          <p>{weather.coord.lon}</p>
          <p>{weather.coord.lat}</p>
          {weather.weather.map((item, index) => (
            <div key={index.toString()}>
              <p>{index.toString()}</p>
              <p>{item.id}</p>
              <p>{item.main}</p>
            </div>
          ))}
        </div>
      );
    }
  }
  render() {
    return (
      <div className="App">
        <h1 style={{ marginTop: 10 }}>Weather</h1>
        {this.renderWeather()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather.data,
});

export default connect(mapStateToProps, { fetchWeather })(Weather);
