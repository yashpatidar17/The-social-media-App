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
  const { dataDispatch } = useContext(DataContext);
  useEffect(() => {
    dataDispatch({ type: "explore-toggle", payload: false });
  }, []);
  return (
    <div className="Feed">
      <div className="v-nav">
        <Navbar />
      </div>
      <div className="Feed-first">
        {/* <SideBar/> */}
        <div className="feed-card">
          <PostInput />
          <Sorting />
          <div className="feed-card-first">
          <PostCard />
          </div>
        </div>
        <div className="suggestion">
          <Suggestion />
        </div>
      </div>
    </div>
  );
};
