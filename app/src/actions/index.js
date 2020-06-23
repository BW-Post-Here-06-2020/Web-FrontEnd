import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";

export const getData = () => (dispatch) => {
  dispatch({ type: FETCH_DATA });
  setTimeout(() => {
    axiosWithAuth()
      .get("")
      .then((res) => {
        console.log("getData -> res", res);
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
