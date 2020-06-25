import {
  FETCH_DATA,
  UPDATE_DATA,
  SET_ERROR,
  GET_RECOMMENDATION_START,
  GET_RECOMMENDATION_SUCCESS,
  GET_RECOMMENDATION_FAILURE,
} from "../actions/postActions";

const initialState = {
  dataArray: [],
  isFetchingData: false,
  isLoading: false,
  error: "",
  postData: "",
};

export const postReducer = (state = initialState, action) => {
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
    case GET_RECOMMENDATION_START:
      return {
        ...state,
        isLoading: true,
      };
    case GET_RECOMMENDATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        postData: action.payload,
      };
    case GET_RECOMMENDATION_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
