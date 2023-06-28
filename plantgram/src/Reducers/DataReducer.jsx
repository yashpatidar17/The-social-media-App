export const dataReducer = (state, action) => {
  switch (action.type) {
    case "Get_All_Post": {
      return { ...state, post: [...action.payload] };
    }
    case "Get_All_Users": {
      return { ...state, AllUsers: [...action.payload] };
    }
    case "BookMark": {
      return { ...state, bookmark: [...action.payload] };
    }
    case "liked": {
      return { ...state, liked: action.payload };
    }
    case "Remove-BookMark": {
      return { ...state, bookmark: [...action.payload] };
    }
    case "add_follower_inother": {
      return {
        ...state,
        AllUsers: state.AllUsers.map((item) =>
          item.username === action.payload.followUser.username
            ? { ...item, followers: [...item.followers, action.payload.user] }
            : item
        ),
      };
    }
    case "Add_Following": {
      return {
        ...state,
        AllUsers: state.AllUsers.map((item) =>
          item.username === action.payload.user.username
            ? {
                ...item,
                following: [...item.following, action.payload.followUser],
              }
            : item
        ),
      };
    }
    default: {
      return state;
    }
  }
};
