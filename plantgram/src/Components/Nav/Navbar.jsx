import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContextProvider';
import "./navbar.css"


import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
export const Navbar = ()=>{
    const {user,logoutHandler} = useContext(AuthContext)
    const navigate = useNavigate();
    return(
        <div className="navbar">
            <div className="navbar-first">
            <div className="navbar-heading">
            <h2>PlantGram</h2>
            </div>
            <div className="navbar-profile">
                <Link to={`/profile/${user?.username}`}>
                <img src={user?.profileAvatar} alt="profile pic" className="profilepic"/> 
                </Link>
            </div>
            </div>
            <div className="navbar-content">
                <HomeRoundedIcon onClick={()=>navigate("/feed")}/>
                <BookmarkRoundedIcon onClick={()=>navigate("/bookmark")}/>
                <ExploreRoundedIcon onClick={()=>navigate("/explore")}/>
               {/* <p><Link to="/feed">Home</Link></p> 
               <p><Link to="/explore">Explore</Link></p> 
               <p><Link to="/bookmark">Bookmarks</Link></p> 
               <p onClick={logoutHandler}> Logout</p>  */}
               <LogoutRoundedIcon onClick={logoutHandler}/>
            </div>
        </div>
    )
}