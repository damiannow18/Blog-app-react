import React from 'react';
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login({setIsLoggedIn}) {

  let navigate = useNavigate();

  const signInWithGoogle = () => {
     signInWithPopup(auth, provider).then((result) => {
       localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      navigate("/");
     }); 
  };
    return (
    <div className='loginPage'>
      <div className='loginContainer'>
      <p>Sign in to continue</p>
      <button 
        className='login-with-google-btn' 
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </button>
      </div>
    </div>
    );
}

export default Login;