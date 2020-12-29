import axios from "axios";

const apiKey = "7f926d45303a3f26202f031aa641920b";

const jsonPlaceholder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

const weather = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5/weather",
});

export { jsonPlaceholder, weather, apiKey };
