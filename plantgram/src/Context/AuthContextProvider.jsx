import { createContext, useEffect, useState } from "react";
import { loginService } from "../services/loginService";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const localStorageToken = JSON.parse(localStorage.getItem("login"));
  const [token, setToken] = useState(localStorageToken?.token);
  const localStorageUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(localStorageUser?.user);
  const navigate = useNavigate() 

  
  const loginUser = async (username, password) => {
    if (username && password !== "") {
      try {
        const {
          data: { foundUser, encodedToken },
          status,
        } = await loginService(username, password);
        if (status === 200 || status === 201) {
          localStorage.setItem(
            "login",
            JSON.stringify({ token: encodedToken })
          );
          setToken(encodedToken);
          localStorage.setItem("user", JSON.stringify({ user: foundUser }));
          setUser(foundUser);
        }
      } catch (e) {
        console.log("login error");
      }
    }
  };
  useEffect(() => {
    if (token) {
      navigate("/feed", { replace: true });
    }
  }, [token, navigate]);
  return (
    <AuthContext.Provider value={{ loginData, setLoginData,loginUser,token,user }}>
      {children}
    </AuthContext.Provider>
  );
};
