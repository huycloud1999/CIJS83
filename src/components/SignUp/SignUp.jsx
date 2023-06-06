import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [accountExists, setAccountExists] = useState(false);

  function handleSignUp() {
    const email = document.querySelector(".email").value;
    const passWord = document.querySelector(".password").value;
    const confirm = document.querySelector(".confirm-password").value;
    const emailErr = document.querySelector(".errorEmail");
    const passWordErr = document.querySelector(".errorPassword");
    const confirmerr = document.querySelector(".errorConfirm");
    const filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
      emailErr.innerHTML = "❌ Email không đúng định dạng!";
      document.querySelector(".email").focus();
      return;
    } else {
      emailErr.innerHTML = "";
    }

    if (passWord.length < 6 || passWord.length > 15) {
      passWordErr.innerHTML = "❌ Password phải từ 6 đến 15 ký tự!";
      document.querySelector(".password").focus();
      return;
    } else {
      passWordErr.innerHTML = "";
    }

    if (passWord !== confirm) {
      confirmerr.innerHTML = "❌ Không trùng password!";
      document.querySelector(".confirm-password").focus();
      return;
    } else {
      confirmerr.innerHTML = "";
    }

    fetch(`https://64565c5c5f9a4f236141d828.mockapi.io/user?userEmail=${email}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setAccountExists(true);
          document.querySelector(".email").focus();
          console.log(data);
        } else {
          fetch("https://64565c5c5f9a4f236141d828.mockapi.io/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userEmail: email,
              userPassword: passWord,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              navigate("/signin");
            })
            .catch((error) => {
              console.error("Error:", error);
              alert("Đăng kí thất bại");
            });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Đăng kí thất bại");
      });
  }

  return (
    <div>
      {accountExists && (
        <div className={styles["signupErr"]}>
          Kiểm tra thông tin và thử lại. Đã có một tài khoản sử dụng email này.
          Đăng nhập vào tài khoản hoặc đăng ký bằng một email khác.
        </div>
      )}
      <div className={styles["signup-container"]}>
        <h2>Sign Up</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="email" />
          <span id="errorEmail" className="errorEmail"></span>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" className="password" />
          <span id="errorPassword" className="errorPassword"></span>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            className="confirm-password"
          />
          <span id="errorConfirm" className="errorConfirm" style={{color:'red'}}></span>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")}>Sign In</span>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
