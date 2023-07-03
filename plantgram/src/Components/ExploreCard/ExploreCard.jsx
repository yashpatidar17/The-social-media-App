import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContextProvider";

import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { getPostData } from "../../services/postService";
import { AuthContext } from "../../Context/AuthContextProvider";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { Link } from "react-router-dom";
export const ExploreCard = () => {
  const {
    dataDispatch,
    bookMarkHandler,
    likeHandler,
    dislikeHAndler,
    likedByUser,
    bookmarkByUser,
    deleteRemoveHandler,
    sortedPostData,
  } = useContext(DataContext);
  const { token, user } = useContext(AuthContext);

  useEffect(() => {
    getPostData(dataDispatch);
  }, []);

  return (
    <div>
      {sortedPostData?.map((post) => (
        <div className="postCard" key={post._id}>
          <div className="postCard-first">
            <img
              src={post.profileAvatar}
              alt="profile avataar"
              className="profilepic"
            />
            <div className="postCard-second">
              <p className="fullName">{post.fullName}</p>
              <p className="createdAt">{post.createdAt.slice(0, 10)}</p>
              <p className="username">@{post.username}</p>
            </div>
          </div>
          <div className="context-box">
            <p className="content">{post.content}</p>
            <Link to={`/post/${post._id}`}>
              <img
                src={post.postImage}
                alt="content"
                className="contentpic"
                style={{
                  display: post.postImage === undefined ? "none" : "block",
                }}
              />
            </Link>
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

            <div>
              {bookmarkByUser(post) ? (
                <BookmarkRoundedIcon
                  onClick={() => deleteRemoveHandler(post, dataDispatch, token)}
                />
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
