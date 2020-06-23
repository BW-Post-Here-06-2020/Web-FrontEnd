import { FETCH_DATA, UPDATE_DATA, SET_ERROR } from "../actions/index";

const initialState = {
  dataArray: [],
  isFetchingData: false,
  error: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
      };
    case UPDATE_DATA:
      return {
        ...state,
        dataArray: action.payload,
        isFetchingData: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
