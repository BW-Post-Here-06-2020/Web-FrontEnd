export const INITIAL_STATE = {
  signIn: localStorage.getItem("token") ? true : false,
  savedPosts: [
    {
      title: "Is Fusion nullified for the Extreme Z Awakening Event?",
      post:
        "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
      prediction: [
        "DBZDokkanBattle",
        "Subreddit2",
        "Subreddit3",
        "Subreddit4",
        "Subreddit5",
        "Subreddit6",
        "Subreddit7",
        "Subreddit8",
        "Subreddit9",
        "Subreddit10",
      ],
    },
    {
      title: "Is Fusion nullified for the Extreme Z Awakening Event?",
      post:
        "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
      prediction: [
        "DBZDokkanBattle",
        "Subreddit2",
        "Subreddit3",
        "Subreddit4",
        "Subreddit5",
        "Subreddit6",
        "Subreddit7",
        "Subreddit8",
        "Subreddit9",
        "Subreddit10",
      ],
    },
    {
      title: "Is Fusion nullified for the Extreme Z Awakening Event?",
      post:
        "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
      prediction: [
        "DBZDokkanBattle",
        "Subreddit2",
        "Subreddit3",
        "Subreddit4",
        "Subreddit5",
        "Subreddit6",
        "Subreddit7",
        "Subreddit8",
        "Subreddit9",
        "Subreddit10",
      ],
    },
    {
      title: "Is Fusion nullified for the Extreme Z Awakening Event?",
      post:
        "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
      prediction: [
        "DBZDokkanBattle",
        "Subreddit2",
        "Subreddit3",
        "Subreddit4",
        "Subreddit5",
        "Subreddit6",
        "Subreddit7",
        "Subreddit8",
        "Subreddit9",
        "Subreddit10",
      ],
    },
    {
      title: "Is Fusion nullified for the Extreme Z Awakening Event?",
      post:
        "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
      prediction: [
        "DBZDokkanBattle",
        "Subreddit2",
        "Subreddit3",
        "Subreddit4",
        "Subreddit5",
        "Subreddit6",
        "Subreddit7",
        "Subreddit8",
        "Subreddit9",
        "Subreddit10",
      ],
    },
    {
      title: "Is Fusion nullified for the Extreme Z Awakening Event?",
      post:
        "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
      prediction: [
        "DBZDokkanBattle",
        "Subreddit2",
        "Subreddit3",
        "Subreddit4",
        "Subreddit5",
        "Subreddit6",
        "Subreddit7",
        "Subreddit8",
        "Subreddit9",
        "Subreddit10",
      ],
    },
    {
      title: "Is Fusion nullified for the Extreme Z Awakening Event?",
      post:
        "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
      prediction: [
        "DBZDokkanBattle",
        "Subreddit2",
        "Subreddit3",
        "Subreddit4",
        "Subreddit5",
        "Subreddit6",
        "Subreddit7",
        "Subreddit8",
        "Subreddit9",
        "Subreddit10",
      ],
    },
    {
      title: "Is Fusion nullified for the Extreme Z Awakening Event?",
      post:
        "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
      prediction: [
        "DBZDokkanBattle",
        "Subreddit2",
        "Subreddit3",
        "Subreddit4",
        "Subreddit5",
        "Subreddit6",
        "Subreddit7",
        "Subreddit8",
        "Subreddit9",
        "Subreddit10",
      ],
    },
  ],
  users: [],
}

export function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SIGN_IN":
      return { ...state, signIn: true }
    case "SIGN_OUT":
      return { ...state, signIn: false }
    case "FETCH_POSTS":
      return { ...state, savedPosts: action.payload }
    case "DELETE_POST":
      return { ...state, savedPosts: state.savedPosts.filter(post => post.id !== action.payload) }
    case "FETCH_USERS":
      return { ...state, users: action.payload }
    case "UPDATE_USER":
      return { ...state, users: [action.payload, ...state.users.filter(user => user.id !== action.payload.id)] }
    case "DELETE_USER":
      return { ...state, users: state.users.filter(user => user.id !== action.payload) }
    default:
      return state
  }
}
