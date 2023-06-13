
import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './Pages/Home/Home';
import { SignUp } from './Pages/CreateAccount/SignUp';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
