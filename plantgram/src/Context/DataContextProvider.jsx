import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { dataReducer } from "../Reducers/DataReducer";
import {
  deleteBookmark,
  disLikePost,
  getLikePost,
  postBookMark,
} from "../services/postService";
import { AuthContext } from "./AuthContextProvider";

const DataInitialState = {
  post: [],
  AllUsers: [],
  bookmark: [],
  liked: false,
  loginUser: null,
  explore:false,
};
export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, DataInitialState);
  const [sort, setSort] = useState("");
  const [trend, setTrend] = useState("");
  const { user } = useContext(AuthContext);
  const postsData = dataState.post;

  const bookMarkHandler = (post, dataDispatch, token) => {
    postBookMark(post, dataDispatch, token);
  };

  const likeHandler = (post, dataDispatch, token) => {
    dataDispatch({ type: "liked", payload: true });
    getLikePost(post, dataDispatch, token);
  };
  const dislikeHAndler = (post, dataDispatch, token) => {
    dataDispatch({ type: "liked", payload: false });
    disLikePost(post, dataDispatch, token);
  };

  const likedByUser = (post, user) => {
    return post?.likes?.likedBy?.find(
      (item) => item.username === user.username
    );
  };

  const bookmarkByUser = (post) => {
    return dataState.bookmark?.find((item) => item._id === post._id);
  };

  const deleteRemoveHandler = (post, dataDispatch, token) => {
    deleteBookmark(post, dataDispatch, token);
  };

  const latestHadler = (value) => {
    setSort(value);
    setTrend("");
  };

  const trendingHandler = (value) => {
    setTrend(value);
    setSort("");
  };

  const sortedFun = () => {
    let pos = [...postsData];

    if (trend === "trending") {
      return (pos = pos.sort((a, b) => b.likes.likeCount - a.likes.likeCount));
    }

    if (sort === "latest") {
      return (pos = pos.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      ));
    }

    return pos;
  };

  const signInUser = dataState?.AllUsers.find(
    (item) => item.username === user.username
  );
  const userFollowingList = signInUser?.following.map((item) => item.username);

  const sortedPostData = sortedFun();
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
          deleteRemoveHandler,
          postsData,
          latestHadler,
          setSort,
          sortedPostData,
          trendingHandler,
          signInUser,
          userFollowingList,
        }}
      >
        {children}
      </DataContext.Provider>
    </div>
  );
};
