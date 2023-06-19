import axios from "axios";

export  const getPostData = async (dataDispatch) => {
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