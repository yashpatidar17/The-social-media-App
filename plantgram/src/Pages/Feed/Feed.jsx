import { useContext, useEffect } from "react";
import { Navbar } from "../../Components/Nav/Navbar";
import { PostCard } from "../../Components/PostCard/PostCard";
import { PostInput } from "../../Components/PostInput/PostInput";
import { Sorting } from "../../Components/Sort/Sorting";
import { Suggestion } from "../../Components/Suggestions/Suggestion";
import "./feed.css";
import { DataContext } from "../../Context/DataContextProvider";
import { SideBar } from "../../Components/SideBar/SideBar";
export const Feed = () => {
  const { dataDispatch,newSortedPostData} = useContext(DataContext);
  useEffect(() => {
    dataDispatch({ type: "explore-toggle", payload: false });
  }, []);
  
  return (
    <div className="Feed">
      <div className="v-nav-explore">
        <Navbar />
      </div>
      <h1 className="home-head">Home</h1>
      <div className="Feed-first">
        
        <div className="feed-card">
          <PostInput />
          <Sorting />
          <div className="feed-card-first">
          <PostCard propData={newSortedPostData}/>
          </div>
        </div>
        <div className="suggestion">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};
