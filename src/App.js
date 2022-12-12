import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import './styles/cssGlobal.css'
import Feed from './pages/Feed/Feed';
import Register from './pages/Register/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
