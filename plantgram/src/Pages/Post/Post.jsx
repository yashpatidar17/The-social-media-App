import { useParams } from "react-router";
import "./post.css";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import { AuthContext } from "../../Context/AuthContextProvider";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { Navbar } from "../../Components/Nav/Navbar";
import { addComment } from "../../services/postService";
import { PostCard } from "../../Components/PostCard/PostCard";

export const Post = () => {
  // const [comment, setComment] = useState("");
  const {
    dataState,
    bookmarkByUser,
    dislikeHAndler,
    likeHandler,
    deleteRemoveHandler,
    bookMarkHandler,
    dataDispatch,
    likedByUser,
  } = useContext(DataContext);
  const { user, token } = useContext(AuthContext);
  const { postID } = useParams();

  const selectedPost = dataState?.post?.find((item) => item._id === postID);
  console.log(selectedPost, "fbaud", user);

  const selectPOst = dataState?.post?.filter((item) => item._id === postID)
  console.log(selectPOst, "fb")
 
  return (
    <div>
      <PostCard propData={selectPOst}/>
    </div>
  );
};
