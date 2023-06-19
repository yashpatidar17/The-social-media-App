import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios";
import "./postcard.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import { getPostData } from "../../services/postService";
export const PostCard = () => {
  const { dataState, dataDispatch } = useContext(DataContext);

  const postData = dataState.post;
 
  useEffect(() => {
    getPostData(dataDispatch);
  }, []);

  return (
    <div>
      <input placeholder="post something here" />
      {postData?.map((post) => (
        <div className="postCard">
        <div className="postCard-first">
          <img
            src={post.profileAvatar}
            alt="profile avataar"
            className="profilepic"
          />
          <div className="postCard-second">
          <p className="fullName">{post.fullName}</p>
          <p className="createdAt">{post.createdAt}</p>
          <p className="username">@{post.username}</p>
         
          </div>
          </div>
          <div>
          <p className="content">{post.content}</p>
          <img src={post.postImage} alt="content" className="contentpic" />

          </div>
          
          <div className="icon-tray">
            <FavoriteBorderRoundedIcon />
            <ChatBubbleOutlineRoundedIcon />
            <BookmarkBorderRoundedIcon />
          </div>
        </div>
      ))}
    </div>
  );
};
