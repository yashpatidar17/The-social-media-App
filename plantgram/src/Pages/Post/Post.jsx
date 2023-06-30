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

 
  return (
    <div>
      <Navbar />
      <div className="post-container">
        <h2>Post</h2>
        <div className="postCard" key={selectedPost._id}>
          <div className="postCard-first">
            <img
              src={selectedPost.profileAvatar}
              alt="profile avataar"
              className="profilepic"
            />
            <div className="postCard-second">
              <p className="fullName">{selectedPost.fullName}</p>
              <p className="createdAt">{selectedPost.createdAt}</p>
              <p className="username">@{selectedPost.username}</p>
            </div>
          </div>
          <div className="context-box">
            <p className="content">{selectedPost.content}</p>

            <img
              src={selectedPost.postImage}
              alt="content"
              className="contentpic"
            />
          </div>
          <div className="icon-tray">
            <div className="icon-container">
              {likedByUser(selectedPost, user) ? (
                <FavoriteRoundedIcon
                  onClick={() =>
                    dislikeHAndler(selectedPost, dataDispatch, token)
                  }
                />
              ) : (
                <FavoriteBorderRoundedIcon
                  onClick={() => likeHandler(selectedPost, dataDispatch, token)}
                />
              )}
              <span>{selectedPost.likes.likeCount}</span>
            </div>
            

            <div>
              {bookmarkByUser(selectedPost) ? (
                <BookmarkRoundedIcon
                  onClick={() =>
                    deleteRemoveHandler(selectedPost, dataDispatch, token)
                  }
                />
              ) : (
                <BookmarkBorderRoundedIcon
                  onClick={() =>
                    bookMarkHandler(selectedPost, dataDispatch, token)
                  }
                />
              )}
            </div>
          </div>

          <div>
          
          </div>
        </div>
      </div>
    </div>
  );
};
