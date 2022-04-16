import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Info from './pages/Info';

function App() {
  return (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/create-post">Create Post</Link>
      <Link to="/info">Info</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/create-post" element={<CreatePost/>} />
        <Route path="/info" element={<Info/>} />
      </Routes>
    </Router>
    );
}

export default App;
