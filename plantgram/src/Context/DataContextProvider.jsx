import { createContext, useReducer } from "react";
import { dataReducer } from "../Reducers/DataReducer";
import { disLikePost, getLikePost } from "../services/postService";

const DataInitialState = { post: [], AllUsers: [], bookmark: [] ,liked:false};
export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, DataInitialState);
 console.log(dataState.post)
  
  const bookMarkHandler = (item) => {};

  const likeHandler = (post,dataDispatch,token) => {
    dataDispatch({type:"liked",payload:true,})
    getLikePost(post, dataDispatch,token);
  };
  const dislikeHAndler = (post,dataDispatch,token) => {
    dataDispatch({type:"liked",payload:false,})
    disLikePost(post, dataDispatch, token)
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
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
