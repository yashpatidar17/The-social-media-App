
import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './Pages/Home/Home';
import { SignUp } from './Pages/CreateAccount/SignUp';
import { Feed } from './Pages/Feed/Feed';
import { BookMark } from './Pages/BookMark/BookMark';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/bookmark" element={<BookMark/>}/>
      </Routes>
    </div>
  );
}

export default App;
