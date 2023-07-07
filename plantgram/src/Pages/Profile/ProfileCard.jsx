import { useContext } from "react";
import "./profilecard.css"
import { DataContext } from "../../Context/DataContextProvider";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { AuthContext } from "../../Context/AuthContextProvider";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import { Link } from "react-router-dom";
export const ProfileCard = ({userPost}) => {
  const {
    dataDispatch,
    bookMarkHandler,
    likeHandler,
    dislikeHAndler,
    likedByUser,
    bookmarkByUser,
    deleteRemoveHandler,
  } = useContext(DataContext);
  const { token, user } = useContext(AuthContext);
  
  return (
    <div>
      {userPost?.map((post) => (
        <div className="postCard" key={post._id}>
          <div className="postCard-first">
          <Link to={`/profile/${post?.username}`}>
              <img
                src={post?.profileAvatar}
                alt="profile pic"
                className="profilepic"
              />
            </Link>
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
