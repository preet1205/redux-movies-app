import axios from "axios";

export const API_ENDPOINT = "http://www.omdbapi.com/?apikey=";

console.log(`${API_ENDPOINT}${process.env.REACT_APP_API_KEY}`);
