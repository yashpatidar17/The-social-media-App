import axios from "axios";

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
    }
    // dataDispatch({type:"liked",payload:false,})
  } catch (e) {
    console.log(e, "dislike post api");
  }
};

export const postBookMark = async (post, dataDispatch, token) => {
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
      dataDispatch({ type: "BookMark", payload: bookmarks });
    }
  } catch (e) {
    console.log(e, "error from bookmark post call");
  }
};

export const deleteBookmark = async (post, dataDispatch, token) => {
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
      dataDispatch({ type: "Remove-BookMark", payload: bookmarks });
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
    }
  } catch (e) {
    console.log(e, "error from follow request");
  }
};

// export const addComment = async (post, comment,dataDispatch,token) => {
  
//   try {
//     const {
//       status,
//       data: { posts },
//     } = await axios.post(
//       `/api/comments/add/${post._id}`,
//       { comment },
//       { headers: { authorization: token } }
//     );
//     if (status === 200 && status === 201) {
//       dataDispatch({ type: "Add_Comment", payload: posts });
//     }
//     console.log(posts);
//   } catch (e) {
//     console.log(e, "error from add comment service call");
//   }
// };

// export const addCommentHandle = async (
//   postId,
//   commentData,
//   socialToken,
//   dataDispatch
// ) => {


//   try {
//     const {
//       status,
//       data: { posts },
//     } = await axios.post(
//       `/api/comments/add/${postId}`,
//       {
//         commentData,
//       },
//       {
//         headers: {
//           authorization: socialToken,
//         },
//       }
//     );

//     if (status === 200 || status === 201) {
//       // console.log(posts);
//       dataDispatch({ type: "POST_OPERATIONS", payload: posts });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
