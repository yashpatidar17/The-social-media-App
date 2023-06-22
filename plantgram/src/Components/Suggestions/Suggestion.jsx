import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios";
import "./suggestion.css"
import { AuthContext } from "../../Context/AuthContextProvider";
import { getAllUsers } from "../../services/userService";

export const Suggestion = () => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const {user} = useContext(AuthContext)
  
    const suggestions = dataState.AllUsers.filter((item)=> item.id !== user.id);
   
  

  useEffect(() => {
    getAllUsers(dataDispatch);
  }, []);

  return (
    <div className="suggestion-container">
      <input placeholder="serach users here" />
      {suggestions.map((item)=>(
        <div className="suggestion-first" key={item._id}>
        
        <div className="suggestion-two">
        <img src={item?.profileAvatar} alt="profile" className="profilepic"/>
        <div className="suggestion-third">
        <span>{item?.firstName +" "+ item?.lastName}</span>
        <span>@{item?.username}</span>
        
        </div>
        </div>
        <button className="suggestion-follow">Follow</button>
        </div>
      ))}
    </div>
  );
};
