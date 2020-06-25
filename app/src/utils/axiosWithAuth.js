import axios from "axios";

export const axiosWithAuth = () =>
  axios.create({
    headers: {
      authorization: window.localStorage
        ? window.localStorage.getItem("token")
        : "",
    },
    baseURL: "https://api04.herokuapp.com",
  });
