import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  setTimeout(() => {
    axiosWithAuth()
      .get("")
      .then((res) => {
        dispatch({ type: UPDATE_DATA, payload: res.data });
      })
      .catch((err) => {
        console.error("error fetching api data");
        dispatch({
          type: SET_ERROR,
          payload: "error fetching api data",
        });
      });
  }, 500);
};

export const GET_RECOMMENDATION_START = "GET_RECOMMENDATION_START";
export const GET_RECOMMENDATION_SUCCESS = "GET_RECOMMENDATION_SUCCESS";
export const GET_RECOMMENDATION_FAILURE = "GET_RECOMMENDATION_FAILURE";

export const getRecommendation = (post) => (dispatch) => {
  dispatch({ type: GET_RECOMMENDATION_START });
  axios
    .post("https://lsbwposthere.herokuapp.com/predict/", post)
    .then((res) => {
      console.log("getRecommendation -> post", post);
      console.log("getRecommendation -> res", res);
      dispatch({ type: GET_RECOMMENDATION_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("getRecommendation -> err", err);
      dispatch({ type: GET_RECOMMENDATION_FAILURE, payload: err });
    });
};
