import { createContext, useState } from "react";
import { loginService, signupService } from "../services/loginService";
import { useNavigate } from "react-router";
import {toast } from 'react-toastify';
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // const {dataState} = useContext(DataContext)
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const localStorageToken = JSON.parse(localStorage.getItem("token"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const navigate = useNavigate();


  const loginUser = async (username, password) => {
    if (username && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await loginService(username, password);
        if (status === 200 || status === 201) {
          localStorage.setItem(
            "token",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));

          setUser(foundUser);
          toast.success("Sign In Successfully",{ autoClose: 500 });
        }
      } catch (e) {
        console.log("login error");
      }
    }
  };

  const signupUser = async (data, navigate, dataDispatch) => {
    try {
      const {
        status,
        data: { encodedToken, createdUser },
      } = await signupService(data);

      if (status === 200 || status === 201) {
        localStorage.setItem("token", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        setUser(createdUser);
        console.log(createdUser, "ndoasfoaslhnf");
        dataDispatch({ type: "add_new_user", payload: createdUser });
        navigate("/");
        toast.success("Sign Up Successfully",{ autoClose: 500 });
      }
    } catch (e) {
      console.log(e, "error from signup service");
    }
  };

  const logoutHandler = () => {
    localStorage.clear();
    setToken("");
    navigate("/", { replace: true });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    toast.success("Log Out Successfully",{ autoClose: 500 });
  };

  return (
    <AuthContext.Provider
      value={{
        loginData,
        setLoginData,
        loginUser,
        token,
        user,
        logoutHandler,
        signupUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
