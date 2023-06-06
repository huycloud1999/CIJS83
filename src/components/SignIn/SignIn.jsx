import React, { useState } from "react";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  function handleSignIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!validateEmail(email)) {
      setEmailError("❌ Email không đúng định dạng!");
      return;
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("❌ Password không được để trống!");
      return;
    } else {
      setPasswordError("");
    }

    fetch(`https://64565c5c5f9a4f236141d828.mockapi.io/user`)
      .then((response) => response.json())
      .then((data) => {
        const user = data.find(
          (user) => user.userEmail === email && user.userPassword === password
        );
        if (user) {
          console.log("Đăng nhập thành công");
          saveUserToLocalStorage(user); // Lưu thông tin người dùng vào Local Storage
          navigate("/"); // Chuyển hướng đến trang chính sau khi đăng nhập thành công
        } else {
          setLoginError("❌ Email hoặc mật khẩu không đúng!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const saveUserToLocalStorage = (user) => {
    const { userPassword, ...userData } = user;
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const validateEmail = (email) => {
    const emailRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className={styles["signin-container"]}>
      <h2>Sign In</h2>
      <div className={styles['form']}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <span id="errorEmail" className="errorEmail">
          {emailError}
        </span>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <span id="errorPassword" className="errorPassword">
          {passwordError}
        </span>
        <span id="errorLogin" className="errorLogin" style={{color:'red'}}>
          {loginError}
        </span>
        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
      </div>

      <p>
        Don't have an account?{" "}
        <span onClick={handleSignUp}>Sign Up</span>
      </p>
    </div>
  );
}

export default SignIn;
