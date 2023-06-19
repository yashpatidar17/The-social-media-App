import { useContext, useEffect } from "react";
import { DataContext } from "../../Context/DataContextProvider";
import axios from "axios";
import "./suggestion.css"
import { AuthContext } from "../../Context/AuthContextProvider";

export const Suggestion = () => {
  const { dataState, dataDispatch } = useContext(DataContext);
  const {user} = useContext(AuthContext)
  console.log(dataState.AllUsers);
    const suggestions = dataState.AllUsers.filter((item)=> item.id !== user.id);
    console.log(suggestions)
  const getAllUsers = async (dataDispatch) => {
    try {
      const {
        status,
        data: { users },
      } = await axios.get("/api/users");
      if (status === 200 || status === 201) {
        dataDispatch({ type: "Get_All_Users", payload: users });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAllUsers(dataDispatch);
  }, []);

  return (
    <div className="suggestion-container">
      <input placeholder="serach users here" />
      {suggestions.map((item)=>(
        <div className="suggestion-first">
        
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
