import React from "react";
import styles from "./SignUp.module.css";


function SignUp({ toggleForm }) {

  return (
    <div className={styles["signup-container"]}>
      <h2>Sign Up</h2>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have an account?{" "}
        <span onClick={toggleForm}>Sign In</span>
      </p>
    </div>
  );
}

export default SignUp;
