import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./Pages/Home/Home";
import { SignUp } from "./Pages/CreateAccount/SignUp";
import { Feed } from "./Pages/Feed/Feed";
import { BookMark } from "./Pages/BookMark/BookMark";
import { Explore } from "./Pages/Explore/Explore";
import { Post } from "./Pages/Post/Post";
import { Profile } from "./Pages/Profile/Profile";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/feed"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmark"
          element={
            <PrivateRoute>
              <BookMark />
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <Explore />
            </PrivateRoute>
          }
        />
        <Route
          path="/post/:postID"
          element={
            <PrivateRoute>
              <Post />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:profileUserName"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
