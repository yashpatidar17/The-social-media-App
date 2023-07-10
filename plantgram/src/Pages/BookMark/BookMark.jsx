import { useContext } from "react";
import { Navbar } from "../../Components/Nav/Navbar";
import { DataContext } from "../../Context/DataContextProvider";

import "./bookmark.css";
import { PostCard } from "../../Components/PostCard/PostCard";

export const BookMark = () => {
  const {
    dataState: { post },
    signInUser,
  } = useContext(DataContext);


  const bookmarkData = post?.filter(({ _id }) =>
  signInUser.bookmarks.map((item) => item._id).includes(_id)
);


  return (
    <div>
      <Navbar />
      <div className="bookmark-container">
        <h2>BookMark</h2>
        {signInUser.bookmarks.length === 0 ? (
          <p className="bookmark-empty-content">No Post Here</p>
        ) : (
          <PostCard propData={bookmarkData} />
        )}
      </div>
    </div>
  );
};
