import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Info from './pages/Info';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsLoggedIn(false);
      window.location.pathname = "/login";
    })
  }
  return (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/create-post">Create Post</Link>}
      <Link to="/info">Info</Link>
      {!isLoggedIn ? <Link to="/login">Login</Link> : <button onClick={signOutUser}>Log out</button> }
    </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/create-post" element={<CreatePost isLoggedIn={isLoggedIn}/>} />
        <Route path="/info" element={<Info/>} />
      </Routes>
    </Router>
    );
}

export default App;
