import { useContext } from "react";
import { Navbar } from "../../Components/Nav/Navbar";
import { DataContext } from "../../Context/DataContextProvider";
import { AuthContext } from "../../Context/AuthContextProvider";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import "./bookmark.css";
export const BookMark = () => {
  const {
    dataState,
    dataDispatch,
    dislikeHAndler,
    likeHandler,
    bookMarkHandler,
    deleteRemoveHandler,
    bookmarkByUser,
    likedByUser,
  } = useContext(DataContext);
  const { user } = useContext(AuthContext);
  const bookMark = dataState?.bookmark;
  console.log(bookMark)
  const { token } = useContext(AuthContext);
  return (
    <div>
      <Navbar />
      <div className="bookmark-container">
        <h2>BookMark</h2>
        {bookMark.length === 0 ? (
          <p>No Post Here</p>
        ) : (
          bookMark?.map((post) => (
            <div className="bookmark-card" key={post._id}>
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
                <img
                  src={post.postImage}
                  alt="content"
                  className="bookmark-contentpic"
                />
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
                  
                </div>

                <div>
                  {bookmarkByUser(post) ? (
                    <BookmarkRoundedIcon
                      onClick={() =>
                        deleteRemoveHandler(post, dataDispatch, token)
                      }
                    />
                  ) : (
                    <BookmarkBorderRoundedIcon
                      onClick={() => bookMarkHandler(post, dataDispatch, token)}
                    />
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
