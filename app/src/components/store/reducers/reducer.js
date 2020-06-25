export const INITIAL_STATE = {
  signIn: localStorage.getItem("token") ? true : false,
  savedPosts: [],
  users: [],
  user: {},
}

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, user: action.payload, signIn: true }
    case "SIGN_OUT":
      return { ...state, signIn: false }
    case "FETCH_POSTS":
      return { ...state, savedPosts: [...state.savedPosts, action.payload] }
    case "DELETE_POST":
      return { ...state, savedPosts: state.savedPosts.filter(post => post.title !== action.payload) }
    case "FETCH_USERS":
      return { ...state, users: action.payload }
    case "UPDATE_USER":
      return { ...state, user: action.payload }
    case "DELETE_USER":
      return { ...state, users: state.users.filter(user => user.id !== action.payload) }
    default:
      return state
  }
}
