import jwt from "jsonwebtoken";

import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  CLEAR_NEW_USER_DATA,
} from "../actions/userActions.js";

export const initState = {
  currentUser: "",
  token: localStorage.getItem("token"),
  userId: localStorage.getItem("token")
    ? jwt.decode(localStorage.getItem("token")).sub
    : "",
  isLoading: false,
  error: "",
  newUser: {},
};

export const userReducer = (state = initState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
        token: action.payload.token,
        userId: action.userId,
        isLoading: false,
        error: "",
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        token: "",
        userId: "",
      };
    case REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: "",
        newUser: action.payload,
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error:
          action.payload.errorMessage.code === "23505"
            ? "username already in use"
            : action.payload.message,
      };
    case CLEAR_NEW_USER_DATA:
      return {
        ...state,
        newUser: {},
      };

    default:
      return state;
  }
};
