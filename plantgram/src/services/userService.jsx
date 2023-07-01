import axios from "axios";

export const getAllUsers = async (dataDispatch) => {
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


  // Not Working
  export const getLoggedInUser = async (user) => {

    try {
      const resp = await axios.get(`/api/users/${user._id}`);
      console.log("resp", resp);
    } catch (error) {
      console.log(error,"error from getting user");
    }
  };