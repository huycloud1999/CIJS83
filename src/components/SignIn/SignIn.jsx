import React from "react";
import styles from "./SignIn.module.css";

function SignIn({ toggleForm }) {
  return (
    <div className={styles["signin-container"]}>
      <div>
        <h2>Sign In</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" />

          <button type="submit">Sign In</button>
        </form>

        <p>
          Don't have an account?{" "}
          <span onClick={toggleForm}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
