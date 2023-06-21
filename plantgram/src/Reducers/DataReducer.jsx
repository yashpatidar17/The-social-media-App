export const dataReducer = (state,action) =>{
    switch(action.type){
        case "Get_All_Post":{
            return {...state,post : [...action.payload]}
        }
        case "Get_All_Users":{
            return {...state,AllUsers : [...action.payload]}
        }
        case "BookMark":{
            return {...state,bookmark : [...action.payload]}
        }
        case "Toggle_Like": {
            const updatedPost = action.payload;
            const updatedPostIndex = state.post.findIndex(
              (post) => post._id === updatedPost._id
            );
            const updatedPosts = [...state.post];
            updatedPosts[updatedPostIndex] = updatedPost;
            return { ...state, post: updatedPosts };
          }
        default:{
            return state;
        }
    }
}