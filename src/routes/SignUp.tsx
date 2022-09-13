import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="main-container">
      <div className="main auth">
        <form action="" className="form">
          <h3>Signup for an account</h3>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="text" name="email" placeholder="email@gmail.com" />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="your password"
            />
          </div>
          <button>Sign Up</button>
          <span className="helper">
            Already have an account? <Link to="/login"> "Login"</Link>
          </span>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
