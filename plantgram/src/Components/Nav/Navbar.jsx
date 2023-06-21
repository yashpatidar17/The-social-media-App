import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';
import "./navbar.css"
export const Navbar = ()=>{
    const {user} = useContext(AuthContext)
    
    return(
        <div className="navbar">
            <h2>PlantGram</h2>
            <div className="navbar-content">
               <p><Link to="/feed">Home</Link></p> 
               <p><Link to="/explore">Explore</Link></p> 
               <p><Link to="/bookmark">Bookmarks</Link></p> 
               <p><Link>Logout</Link></p> 
            </div>
            <div className="navbar-profile">
                <img src={user?.profileAvatar} alt="profile pic" className="profilepic"/> 
            </div>
        </div>
    )
}