import { Link } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../../Context/AuthContextProvider";
import { useContext } from "react";
export const Login = () => {
  const { loginData, setLoginData } = useContext(AuthContext);

  const loginFieldHandler = (e) => {
    const {name,value} = e.target;
    setLoginData((prev)=> ({...prev, [name]:value}))
  };

  return (
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
          value={loginData.email}
          name="email"
          onChange={(e) => loginFieldHandler(e)}
          required
        />
        <input
          type="text"
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
        <button className="normal-button">Test Login</button>
      </div>
      <p>
        Create a new account <Link>New Account</Link>
      </p>
    </div>
  );
};
