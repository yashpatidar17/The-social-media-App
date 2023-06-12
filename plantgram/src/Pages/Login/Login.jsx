import { Link } from "react-router-dom"
import "./login.css"
export const Login = ()=>{
    return(
        <div className="login-container">
            <div className="login-heading-container">
            <h3>PlantGram</h3>
            <p>Social Media For People</p>
            <h1>Log In</h1>
            </div>
            
            <div className="login-input-container">
                <input type="text" placeholder="Username" className="input-field"/>
                <input type="text" placeholder="Password" className="input-field"/>
            </div>
            <div className="login-button-container">
                <button className="normal-button">Login</button>
                <button className="normal-button">Test Login</button>
            </div>
            <p>Create a new account <Link>New Account</Link></p>
        </div>
    )
}