import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import Modal from "react-modal";
import "./postcard.css";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import BookmarkBorderRoundedIcon from "@mui/icons-material/BookmarkBorderRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import {
  editPostServices,
  getPostData,
  postDeleteService,
} from "../../services/postService";
import { AuthContext } from "../../Context/AuthContextProvider";
import BookmarkRoundedIcon from "@mui/icons-material/BookmarkRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

export const PostCard = ({ propData }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({});

  const {
    dataState,
    dataDispatch,
    bookMarkHandler,
    likeHandler,
    dislikeHAndler,
    likedByUser,
    bookmarkByUser,
    deleteRemoveHandler,
    userUnfollwHandler,
  } = useContext(DataContext);
  const { token, user } = useContext(AuthContext);

  const toggleDropdown = (post) => {
    setSelectedPost(post);
    setShowDropdown(!showDropdown);
  };
  console.log(selectedPost, "ghbfoasfnboasljk");

  const postDeleteHandler = (_id, dataDispatch, token) => {
    postDeleteService(_id, dataDispatch, token);
    getPostData(dataDispatch); // any other solution for
  };

  const updateHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedPost((prev) => ({ ...prev, [name]: value }));
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const savePost = async (event) => {
    event.preventDefault();
    // Update the user profile data
    // ...
    await editPostServices(selectedPost?._id, updatedPost, dataDispatch, token);
    closeModal();
    setSelectedPost((prevSelectedPost) => ({
      ...prevSelectedPost,
      content: updatedPost.content,
    }));
  };

  const getUpdatedPostData = () => {
    setUpdatedPost({
      ...selectedPost,
      content: selectedPost?.content,
    });
  };

  useEffect(() => {
    getPostData(dataDispatch);
    getUpdatedPostData();
  }, [selectedPost]);

  const userUnFollowed = dataState?.AllUsers.find(
    (item) => item.username === selectedPost?.username
  );
  // console.log(userUnFollowed,"9oqwegiwujeqghboqwauiehg")
  return (
    <div className="postCard-container">
      {propData?.map((post) => (
        <div className="postCard" key={post._id}>
          <div className="postCard-first">
            <div className="postCard-first-first">
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
            <div className="ThreeDot">
              <div>
                {showDropdown &&
                  selectedPost &&
                  selectedPost?._id === post._id && (
                    <div className="dropdown-menu">
                      {selectedPost?.username === user.username ? (
                        <div className="threedorMenu">
                          <button
                            className="threedotButton"
                            onClick={() =>
                              postDeleteHandler(
                                selectedPost?._id,
                                dataDispatch,
                                token
                              )
                            }
                          >
                            Delete Post
                          </button>

                          <button
                            className="threedotButton"
                            onClick={openModal}
                          >
                            Edit Post
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            className="threedotButton"
                            onClick={() =>
                              userUnfollwHandler(
                                userUnFollowed,
                                dataDispatch,
                                token
                              )
                            }
                          >
                            UnFollow
                          </button>
                        </div>
                      )}
                    </div>
                  )}
              </div>
              <MoreVertRoundedIcon onClick={() => toggleDropdown(post)} />
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
                  display: post.postImage === "" ? "none" : "block",
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
              <span>{post?.likes?.likeCount}</span>
            </div>

            <div>
              {bookmarkByUser(post) ? (
                <BookmarkRoundedIcon
                  onClick={() =>
                    deleteRemoveHandler(post, dataDispatch, token, user)
                  }
                />
              ) : (
                <BookmarkBorderRoundedIcon
                  onClick={() =>
                    bookMarkHandler(post, dataDispatch, token, user)
                  }
                />
              )}
            </div>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <img
          src={selectedPost?.postImage}
          alt="content"
          className="contentpic"
        />

        <form onSubmit={savePost}>
          <div className="modal-content">
            <label className="modal-label">
              Content:
              <input
                type="text"
                className="modal-input"
                value={updatedPost?.content}
                onChange={(e) => updateHandler(e)}
                name="content"
              />
            </label>
          </div>
          <button type="submit" className="modal-button">
            Save
          </button>
        </form>
      </Modal>
    </div>
  );
};
