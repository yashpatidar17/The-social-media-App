import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../Reducers/DataReducer";
import { deleteBookmark, disLikePost, getLikePost, postBookMark } from "../services/postService";
import { AuthContext } from "./AuthContextProvider";

const DataInitialState = { post: [], AllUsers: [], bookmark: [] ,liked:false};
export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, DataInitialState);
 //console.log(dataState.post,"post")
  const {user} = useContext(AuthContext);
  const bookMarkHandler = (post,dataDispatch,token) => {
    
    postBookMark(post,dataDispatch,token)
  };

  const likeHandler = (post,dataDispatch,token) => {
    dataDispatch({type:"liked",payload:true,})
    getLikePost(post, dataDispatch,token);
  };
  const dislikeHAndler = (post,dataDispatch,token) => {
    dataDispatch({type:"liked",payload:false,})
    disLikePost(post, dataDispatch, token)
  }

  const likedByUser = (post,user)=>{
    return post?.likes?.likedBy?.find((item)=> item.username === user.username)
  }

  const bookmarkByUser = (post)=>{
    
    return dataState.bookmark?.find((item)=>item._id === post._id)
    
  }
  
  const deleteRemoveHandler = (post, dataDispatch, token)=>{
    deleteBookmark(post, dataDispatch, token);
  }
  return (
    <div>
      <DataContext.Provider
        value={{
          dataState,
          dataDispatch,
          item: 4,
          bookMarkHandler,
          likeHandler,
          dislikeHAndler,
          likedByUser,
          bookmarkByUser,
          deleteRemoveHandler
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
