import React from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_PROFILE_START = "FETCH_USER_START";
export const FETCH_PROFILE_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_USER_FAILURE";

export const fetchProfile = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_PROFILE_START });
    axiosWithAuth
      .get("/api/users")
      .then((res) => {
        console.log(res);
        dispatch({ type: FETCH_PROFILE_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FETCH_PROFILE_FAILURE });
      });
  };
};
