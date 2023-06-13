import { useNavigate } from "react-router";

export const SignUp = () => {
    const navigate = useNavigate()
  return (
    <div className="login-container">
      <div className="login-heading-container">
        <h3>PlantGram</h3>
        <p>Social Media For People</p>
        <h1>Sign Up</h1>
      </div>
      <div className="login-input-container">
        <input type="text" placeholder="Enter Your Name" className="input-field"/>
        <input type="text" placeholder="Enter UserName" className="input-field"/>
        <input type="password" placeholder="Enter Password" className="input-field"/>
      </div>
      <div className="login-button-container">
        <button className="normal-button">Sign Up</button>
        <button className="normal-button" onClick={()=>navigate("/")}>Log In</button>
      </div>
    </div>
  );
};
