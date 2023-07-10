import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContextProvider";
import { DataContext } from "../../Context/DataContextProvider";

export const SignUp = () => {
  const { signupUser } = useContext(AuthContext);
  const { dataDispatch } = useContext(DataContext);
  const [confirmPas, setConfirmPas] = useState("");
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    profileAvatar: "https://i.postimg.cc/90brSyfv/pngtree-cartoon-color-simple-male-avatar-png-image-1934459.jpg",
    bio: "New User",
    following: [],
    followers: [],
    bookmarks: [],
  });
  const navigate = useNavigate();

  const signupHandler = (e) => {
    const { value, name } = e.target;
    setSignUpDetails((prev) => ({ ...prev, [name]: value }));
  };
  const confirmPasHandler = (e) => {
    setConfirmPas(e.target.value);
  };

  useEffect(() => {
    setSignUpDetails((prev) => ({ ...prev }));
  }, [signUpDetails.username]);

  const { firstName, lastName, password, username } = signUpDetails;
  const registerHandler = () => {
    if (firstName && lastName && password && username) {
      if (password === confirmPas) {
        signupUser(signUpDetails, navigate, dataDispatch);
      } else {
        console.log("pass not match");
      }
    } else {
      console.log("fill all details");
    }
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-heading-container">
          <h3>PlantGram</h3>
          <p>Social Media For People</p>
          <h1>Sign Up</h1>
        </div>
        <div className="login-input-container">
          <input
            type="text"
            name="firstName"
            onChange={signupHandler}
            placeholder="Enter First Name"
            className="input-field"
            required
          />
          <input
            type="text"
            name="lastName"
            onChange={signupHandler}
            placeholder="Enter Last Name"
            className="input-field"
            required
          />
          <input
            type="text"
            name="username"
            onChange={signupHandler}
            placeholder="Enter UserName"
            className="input-field"
            required
          />
          <input
            type="password"
            name="password"
            onChange={signupHandler}
            placeholder="Enter Password"
            className="input-field"
            required
          />
          <input
            type="password"
            onChange={confirmPasHandler}
            placeholder="Confirm Password"
            className="input-field"
            required
          />
        </div>
        <div className="login-button-container">
          <button className="normal-button" onClick={registerHandler}>
            Sign Up
          </button>
          <button className="normal-button" onClick={() => navigate("/")}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};
