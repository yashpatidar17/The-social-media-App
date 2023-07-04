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
            
            <div className="navbar-heading">
            <h2>PlantGram</h2>
            </div>
            <div className="navbar-content">
                <HomeRoundedIcon onClick={()=>navigate("/feed")} className="icon-nav"/>
                <BookmarkRoundedIcon onClick={()=>navigate("/bookmark")}/>
                <ExploreRoundedIcon onClick={()=>navigate("/explore")}/>
               <LogoutRoundedIcon onClick={logoutHandler}/>
            </div>
            <div className="navbar-profile">
                <Link to={`/profile/${user?.username}`}>
                <img src={user?.profileAvatar} alt="profile pic" className="profilepic"/> 
                </Link>
            </div>
        </div>
    )
}