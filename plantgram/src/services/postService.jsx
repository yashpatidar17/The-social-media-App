import axios from "axios";
import { toast } from 'react-toastify';

export const getPostData = async (dataDispatch) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.get("/api/posts");
    if (status === 200 || status === 201) {
      dataDispatch({ type: "Get_All_Post", payload: posts });
    }
  } catch (e) {
    console.error(e);
  }
};

export const getLikePost = async (post, dataDispatch, token) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/like/${post?._id}`,
      {},
      { headers: { authorization: token } }
    );
    console.log("post liked");
    if (status === 200 || status === 201) {
      dataDispatch({ type: "Get_All_Post", payload: posts });
      toast.success("Liked",{ autoClose: 500 });
    }
  } catch (e) {
    console.log(e, "like post api");
  }
};

export const disLikePost = async (post, dataDispatch, token) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/dislike/${post?._id}`,
      {},
      { headers: { authorization: token } }
    );
    console.log("post disliked");
    if (status === 200 || status === 201) {
      dataDispatch({ type: "Get_All_Post", payload: posts });
      toast.success("Disliked",{ autoClose: 500 });
    }
    // dataDispatch({type:"liked",payload:false,})
  } catch (e) {
    console.log(e, "dislike post api");
  }
};

export const postBookMark = async (post, dataDispatch, token, user) => {
  console.log(user, "iughbfaweuiolksghfuiaskd");
  try {
    const {
      status,
      data: { bookmarks },
    } = await axios.post(
      `/api/users/bookmark/${post._id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    if (status === 200 || status === 201) {
      dataDispatch({ type: "BookMark", payload: { bookmarks, user } });
      toast.success("Bookmarked",{ autoClose: 500 });
    }
  } catch (e) {
    console.log(e, "error from bookmark post call");
  }
};

export const deleteBookmark = async (post, dataDispatch, token, user) => {
  try {
    const {
      status,
      data: { bookmarks },
    } = await axios.post(
      `/api/users/remove-bookmark/${post._id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    if (status === 200 || status === 201) {
      dataDispatch({ type: "BookMark", payload: { bookmarks, user } });
      toast.success("Removed from Bookmark",{ autoClose: 500 });
    }
  } catch (e) {
    console.log(e, "error from delete bookmark call");
  }
};

export const followReq = async (item, dataDispatch, token) => {
  try {
    const {
      status,
      data: { user, followUser },
    } = await axios.post(
      `/api/users/follow/${item._id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      console.log(user, "from follow button", followUser);
      dataDispatch({
        type: "add_follower_inother",
        payload: { user, followUser },
      });
      dataDispatch({
        type: "Add_Following",
        payload: { user, followUser },
      });
      toast.success("Followed",{ autoClose: 500 });
     
    }

    
  } catch (e) {
    console.log(e, "error from follow request");
  }
};

export const createPostService = async (postData, dataDispatch, token) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/`,
      { postData },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (status === 200 || status === 201) {
      dataDispatch({ type: "Post_Operations", payload: posts });
      toast.success("Post Created",{ autoClose: 500 });
    }
  } catch (error) {
    console.log(error, "from create post data");
  }
};

export const postDeleteService = async (_id, dataDispatch, token) => {
  console.log({ _id });
  try {
    const {
      status,
      data: { posts },
    } = await axios.delete(`/api/posts/${_id}`, {
      headers: {
        authorization: token,
      },
    });
    if (status === 200 && status === 201) {
      dataDispatch({ type: "Post_Operations", payload: posts });
      toast.success("Post Deleted",{ autoClose: 500 });
    }
  } catch (e) {
    console.log(e, "error from post delelte handler");
  }
};

export const editPostServices = async (
  _id,
  updatedPost,
  dataDispatch,
  token
) => {
  try {
    const {
      status,
      data: { posts },
    } = await axios.post(
      `/api/posts/edit/${_id}`,
      { postData: updatedPost },
      {
        headers: {
          authorization: token,
        },
      }
    );

    if (status === 200 && status === 201) {
      dataDispatch({ type: "Post_Operations", payload: posts });
      toast.success("Post Edited",{ autoClose: 500 });
    }
  } catch (e) {
    console.log(e, "error from edit post handler");
  }
};

export const unfollowServices = async (profileUser, dataDispatch, token) => {
  try {
    const {
      status,
      data: { user, followUser },
    } = await axios.post(
      `/api/users/unfollow/${profileUser._id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );

    console.log(user,followUser,"dfbuiwevbdfi");

    if (status === 200 || status === 201) {
      console.log("unfollow worked")
      dataDispatch({
        type: "Remove_Following",
        payload: { user, followUser },
      });
      dataDispatch({
        type: "Remove_Follower",
        payload: { user, followUser },
      });
      toast.success("UnFollowed",{ autoClose: 500 });
    }
  } catch (e) {
    console.log(e, "error from unfollow handler");
  }
};
