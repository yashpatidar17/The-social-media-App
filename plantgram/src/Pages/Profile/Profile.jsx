import { useContext, useEffect, useState } from "react";
import React from "react";
import Modal from "react-modal";
import "./modal.css";
import "./profile.css";

import { Suggestion } from "../../Components/Suggestions/Suggestion";
import { DataContext } from "../../Context/DataContextProvider";
import { useParams } from "react-router";
import { editUserHandler } from "../../services/userService";
import { AuthContext } from "../../Context/AuthContextProvider";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { PostCard } from "../../Components/PostCard/PostCard";
import { Navbar } from "../../Components/Nav/Navbar";
import { followReq } from "../../services/postService";

export const Profile = () => {
  const {
    dataState,
    dataDispatch,
    userUnfollwHandler,
    following,
    setFollowing,
  } = useContext(DataContext);
  const profileUserName = useParams();
  const { token, user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileUser, setUserProfile] = useState(null);
  const [userPost, setUserPost] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState({});

  const getProfilePageData = () => {
    setUserProfile(
      dataState.AllUsers.find(
        (item) => item.username === profileUserName.profileUserName.toString()
      )
    );

    const filteredPosts = dataState.post.filter(
      (item) => item?.username === profileUserName?.profileUserName.toString()
    );
    setUserPost(filteredPosts);

    setUpdatedProfile({
      firstName: profileUser?.firstName,
      lastName: profileUser?.lastName,
      website: profileUser?.website,
      bio: profileUser?.bio,
      profileAvatar: profileUser?.profileAvatar,
    });
  };

  useEffect(() => {
    getProfilePageData();
  }, [profileUserName, dataState.AllUsers, dataState.post, profileUser]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const saveProfile = async (event) => {
    event.preventDefault();
    await editUserHandler(updatedProfile, token, dataDispatch);
    closeModal();
  };

  const updateHandler = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const followHandler = (profileUser, dataDispatch, token) => {
    followReq(profileUser, dataDispatch, token);
    setFollowing(true);
  };

  return (
    <div className="profile-main-container">
      <Navbar />
      <h2 className="profile-head">User Profile</h2>
      <div className="profile-container">
        <div className="profile-main">
          <div className="profile-main-con">
            <div className="profile-pic-con">
              <img
                src={profileUser?.profileAvatar}
                alt="profile pic"
                className="profilepic-profile"
              />
              <button className="post-button">Change Avatar</button>
            </div>
            <div>
              <div className="profile-info">
                <div className="profile-details-first">
                  <span>
                    {profileUser?.firstName + " " + profileUser?.lastName}
                  </span>
                  <span>@{profileUser?.username}</span>
                </div>
                <div>
                  {profileUser?.username === user?.username ? (
                    <button onClick={openModal} className="post-button">
                      Edit Button
                    </button>
                  ) : following ? (
                    <button
                      onClick={() =>
                        userUnfollwHandler(profileUser, dataDispatch, token)
                      }
                    >
                      UnFollow
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        followHandler(profileUser, dataDispatch, token)
                      }
                    >
                      follow
                    </button>
                  )}
                </div>
              </div>
              <p>{profileUser?.bio}</p>
              <a
                href={profileUser?.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LanguageRoundedIcon />
                {profileUser?.website}
              </a>

              <div className="profile-follow-details">
                <p>{profileUser?.following.length} Following</p>
                <p>{profileUser?.followers.length} Followers</p>
              </div>
            </div>
          </div>
          <div className="profile-postcard">
            <PostCard propData={userPost} />
          </div>
        </div>
        <div className="profile-sug">
          <Suggestion />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Edit Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-container">
          <img
            src={profileUser?.profileAvatar}
            alt="profile pic"
            className="profilepic-profile"
          />
          <form onSubmit={saveProfile}>
            <div className="modal-content">
              <label className="modal-label">
                Bio:
                <input
                  type="text"
                  className="modal-input"
                  value={updatedProfile?.bio}
                  onChange={(e) => updateHandler(e)}
                  name="bio"
                />
              </label>
              <label className="modal-label">
                Portfolio URL:
                <input
                  type="text"
                  className="modal-input"
                  value={updatedProfile?.website}
                  onChange={(e) => updateHandler(e)}
                  name="website"
                />
              </label>
            </div>
            <div className="modal-button-div">
            <button type="submit" className="modal-button">
              Save
            </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
