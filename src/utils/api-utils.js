import axios from "axios";

const API_URL = "https://62f1099325d9e8a2e7c47836.mockapi.io/api/v1/tv-shows";

export const fetchTvShows = () => {
    return axios.get(API_URL);
}

export const fetchTvShow = (id) => {
    return axios.get(API_URL + "/" + id);
}