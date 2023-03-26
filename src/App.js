
import './App.css';
import { BasicTable } from './components/BasicTable';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/usertable" element={<BasicTable/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
