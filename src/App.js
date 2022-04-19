import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import Info from './pages/Info';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import useHistory from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn'));

  const signOutUser = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsLoggedIn(false);
      window.location.pathname = "/login";
    })
  }

  return (
  <Router>
    <header>
    <div className="container">
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      {isLoggedIn && <li><Link to="/create-post">Create Post</Link></li>}
      <li><Link to="/info">Info</Link></li>
      {!isLoggedIn ? <li><Link to="/login">Login</Link></li> : <li><button className='logoutBtn' onClick={signOutUser}><span></span>Log out</button></li> }
      </ul>
    </nav>
    </div>
    </header>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/create-post" element={<CreatePost isLoggedIn={isLoggedIn}/>} />
        <Route path="/info" element={<Info/>} />
      </Routes>
    </Router>
    );
}

export default App;
