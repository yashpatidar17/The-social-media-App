import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { DataContext } from "../../Context/DataContextProvider";
import { createPostService } from "../../services/postService";
import "./postinput.css";
export const PostInput = () => {
  // const [postData, setCreatePost] = useState("");
  const { user, token } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);

  let postData = { content: "" };
  const postInputHandler = (e) => {
    postData = { ...postData, content: e.target.value };
  };

  const createPostHandler = () => {
    createPostService(postData, dataDispatch, token);
    postData = { content: "" };
  };
  
  return (
    <div>
      <div className="postinput">
        <div className="postinput-first">
          <div className="input-container">
            <img
              src={user?.profileAvatar}
              alt="profile avataar"
              className="profilepic"
            />
            <textarea
              placeholder="post something here"
              onChange={(e) => postInputHandler(e)}
              className="input-filed"
            />
          </div>
          <div className="input-container-second">
            <button onClick={createPostHandler} className="post-button">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
