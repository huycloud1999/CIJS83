import React from "react";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  function handleSignIn(){
      navigate('/')
  }

  const handleSignUP =()=>{
      
      navigate('/signup')
  }
  return (
    <div className={styles["signin-container"]}>
      <h2>Sign In</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="submit" onClick={handleSignIn}>Sign In</button>
      </form>

      <p>
        Don't have an account?{" "}
        <span onClick={handleSignUP}>Sign Up</span>
      </p>
    </div>
  );
}

export default SignIn;
