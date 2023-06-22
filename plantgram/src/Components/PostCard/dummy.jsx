import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios";
import "./postcard.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { getPostData } from "../../services/postService";
import { AuthContext } from "../../Context/AuthContextProvider";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
export const PostCard = () => {
  const {
    dataState,
    dataDispatch,
    bookMarkHandler,
    likeHandler,
    dislikeHAndler,
    likedByUser,
    bookmarkByUser,
    deleteRemoveHandler
  } = useContext(DataContext);
  const { token, user } = useContext(AuthContext);
  const postData = dataState.post;
  
  useEffect(() => {
    getPostData(dataDispatch);
  }, []);

  return (
    <div>
      <input placeholder="post something here" />
      {postData?.map((post) => (
        <div className="postCard" key={post._id}>
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
          <div className="context-box">
            <p className="content">{post.content}</p>
            <img src={post.postImage} alt="content" className="contentpic" />
          </div>

          <div className="icon-tray">
            <div className="icon-container">
              {likedByUser(post, user) ? (
                <FavoriteRoundedIcon
                  onClick={() => dislikeHAndler(post, dataDispatch, token)}
                />
              ) : (
                <FavoriteBorderRoundedIcon
                  onClick={() => likeHandler(post, dataDispatch, token)}
                />
              )}
              <span>{post.likes.likeCount}</span>
            </div>
            <ChatBubbleOutlineRoundedIcon />

            <div>
              {bookmarkByUser(post) ? (
                <BookmarkRoundedIcon onClick={()=>deleteRemoveHandler(post, dataDispatch, token)}/>
              ) : (
                <BookmarkBorderRoundedIcon
                  onClick={() => bookMarkHandler(post, dataDispatch, token)}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
