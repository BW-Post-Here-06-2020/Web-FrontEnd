import axios from "axios";
import jwt from "jsonwebtoken";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const URL = "https://api04.herokuapp.com";

export const LOGIN_USER_START = "LOGIN_USER_START";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const loginUser = (user) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER_START });
    axiosWithAuth()
      .post(`/api/users/login`, user)
      .then((res) => {
        console.log("loginUser -> res", res);
        window.localStorage.setItem("token", res.data.token);
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res.data,
          userId: jwt.decode(res.data.token).sub,
        });
      })
      .catch((err) => {
        console.log("loginuser", user);
        console.log(err);
        dispatch({
          type: LOGIN_USER_FAILURE,
          payload: err.response.data.message,
        });
      });
  };
};

export const REGISTER_USER_START = "REGISTER_USER_START";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const registerUser = (newUser) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER_START });
    axios
      .post(`${URL}/api/users/register`, newUser)
      .then((res) => {
        console.log("registerUser -> res", res);
        console.log("registerUser -> newUser", newUser);
        dispatch({ type: REGISTER_USER_SUCCESS, payload: res.data[0] });
      })
      .catch((err) => {
        console.log("registerUser -> err", err);
        console.log(newUser);
        dispatch({ type: REGISTER_USER_FAILURE, payload: err.response.data });
      });
  };
};

export const LOGOUT_USER = "LOGOUT_USER";
export const logoutUser = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({ type: LOGOUT_USER });
  };
};

export const CLEAR_NEW_USER_DATA = "CLEAR_NEW_USER_DATA";

export const clearNewUserData = () => {
  return (dispatch) => {
    dispatch({ type: CLEAR_NEW_USER_DATA });
  };
};
