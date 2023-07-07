import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext, useEffect } from "react";
export const Login = () => {
  const { loginData, setLoginData, loginUser, token } = useContext(AuthContext);
  console.log(loginData);
  const navigate = useNavigate();
  useEffect(() => {
    loginUser(loginData.username, loginData.password);
  }, [loginData.username, loginData.password]);

  const loginFieldHandler = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    if (token) {
      navigate("/feed", { replace: true });
    }
  }, [token, navigate]);

  const testLoginHandler = () => {
    setLoginData((prev) => ({
      ...prev,
      username: "yashpatidar",
      password: "gulla123",
    }));
  };

  return (
    <div className="login">
    <div className="login-container">
      <div className="login-heading-container">
        <h3>PlantGram</h3>
        <p>Social Media For People</p>
        <h1>Log In</h1>
      </div>
      <div className="login-input-container">
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          value={loginData.username}
          name="username"
          onChange={(e) => loginFieldHandler(e)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          value={loginData.password}
          name="password"
          onChange={(e) => loginFieldHandler(e)}
          required
        />
      </div>
      <div className="login-button-container">
        <button className="normal-button">Login</button>
        <button className="normal-button" onClick={testLoginHandler}>
          Test Login
        </button>
      </div>
      <p>
        Create a new account <Link to="signup">New Account</Link>
      </p>
    </div>
    </div>
  );
  
};
