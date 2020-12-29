import { weather,apiKey } from "../../api";
import { FETCH_WEATHER } from "./types";

const fetchWeather = ({lat,long}) => async (dispatch) => {

  try {
    const response = await weather.get(
      `?lat=${lat}&lon=${long}&appid=${apiKey}`
    );
    dispatch({
      type:FETCH_WEATHER,
      payload:response.data
    })
  } catch (e) {
    console.log(e);
  }
};

export { fetchWeather };
