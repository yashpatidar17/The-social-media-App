import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios";
import "./suggestion.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import { getAllUsers } from "../../services/userService";
import { followReq } from "../../services/postService";
import { Link } from "react-router-dom";

export const Suggestion = () => {
  const { dataState, dataDispatch, userFollowingList, signInUser } =
    useContext(DataContext);

  const { user, token } = useContext(AuthContext);

  const suggestions = dataState?.AllUsers?.filter(
    (item) =>
      item.username !== user.username &&
      !userFollowingList.includes(item.username)
  );

  const followUserHandler = (item, dataDispatch, token) => {
    followReq(item, dataDispatch, token);
  };

  useEffect(() => {
    getAllUsers(dataDispatch);
  }, []);

  return (
    <div className="suggestion-container">
      <div className="suggestion-search">
        <input placeholder="serach users here" className="suggestion-input" />
      </div>
      {suggestions.map((item) => (
        <div className="suggestion-first" key={item._id}>
          <div className="suggestion-two">
            <Link to={`/profile/${item?.username}`}>
              <img
                src={item?.profileAvatar}
                alt="profile pic"
                className="profilepic"
              />
            </Link>
            <div className="suggestion-third">
              <span>{item?.firstName + " " + item?.lastName}</span>
              <span>@{item?.username}</span>
            </div>
          </div>
          <div>
          <button
            className="post-button"
            onClick={() => followUserHandler(item, dataDispatch, token)}
          >
            Follow
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};
