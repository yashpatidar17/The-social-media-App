
import { Route, Routes } from 'react-router';
import './App.css';
import { Home } from './Pages/Home/Home';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
