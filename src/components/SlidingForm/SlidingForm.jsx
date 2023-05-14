import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./SlidingForm.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

function SlidingForm() {
  const [form, setForm] = useState("sign-in");

  const toggleForm = () => {
    if (form === "sign-in") {
      setForm("sign-up");
    } else {
      setForm("sign-in");
    }
  };

  return (
    <div className="sliding-form">
      <TransitionGroup>
        <CSSTransition
          key={form}
          classNames="form"
          timeout={{ enter: 300, exit: 300 }}
        >
          <div className="form-wrapper">
            {form === "sign-in" ? (
              <SignIn toggleForm={toggleForm} />
            ) : (
              <SignUp toggleForm={toggleForm} />
            )}
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default SlidingForm;
