import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { DataContext } from "../../Context/DataContextProvider";
import { createPostService } from "../../services/postService";

export const PostInput = () => {
  const [postData, setCreatePost] = useState("");
  const { user, token } = useContext(AuthContext);
  const { dataDispatch, dataState } = useContext(DataContext);
  const postInputHandler = (e) => {
    setCreatePost(e.target.value);
  };

  const createPostHandler = () => {
    createPostService(postData, dataDispatch, token);
    setCreatePost("");
  };
  return (
    <div>
      <div className="postCard">
        <div className="input-container">
          <img
            src={user?.profileAvatar}
            alt="profile avataar"
            className="profilepic"
          />

          <input
            placeholder="post something here"
            value={postData}
            onChange={(e) => postInputHandler(e)}
            className="input-filed"
          />
          <button onClick={createPostHandler} className="post-button">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};
