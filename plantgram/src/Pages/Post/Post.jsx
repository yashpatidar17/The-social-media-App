import { useParams } from "react-router";
import "./post.css";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContextProvider";

import { PostCard } from "../../Components/PostCard/PostCard";

export const Post = () => {
  const { dataState } = useContext(DataContext);
  const { postID } = useParams();

  const selectPOst = dataState?.post?.filter((item) => item._id === postID);

  return (
    <div>
      <PostCard propData={selectPOst} />
    </div>
  );
};
