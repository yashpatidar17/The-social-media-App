
import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './Pages/Home/Home';
import { SignUp } from './Pages/CreateAccount/SignUp';
import { Feed } from './Pages/Feed/Feed';
import { BookMark } from './Pages/BookMark/BookMark';
import { Explore } from './Pages/Explore/Explore';
import { Post } from './Pages/Post/Post';
import { Profile } from './Pages/Profile/Profile';
import { SideBar } from './Components/SideBar/SideBar';
import { Navbar } from './Components/Nav/Navbar';



function App() {
  return (
    <div>
    <Navbar />
      {/* <SideBar/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/bookmark" element={<BookMark/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/post/:postID" element={<Post/>}/>
        <Route path="/profile/:profileUserName" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
