import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';
import "./navbar.css"
export const Navbar = ()=>{
    const {user} = useContext(AuthContext)
    console.log(user);
    return(
        <div className="navbar">
            <div className="navbar-content">
               <p><Link>Home</Link></p> 
               <p><Link>Explore</Link></p> 
               <p><Link>Bookmarks</Link></p> 
               <p><Link>Logout</Link></p> 
            </div>
            <div className="navbar-profile">
                <img src={user?.profileAvatar} alt="profile pic" className="profilepic"/>
                <p>{user?.firstName + " " + user?.lastName}</p>
                <p>@{user?.username}</p>
            </div>
        </div>
    )
}