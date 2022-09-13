import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main className="main-container">
      <div className="main auth">
        <form action="" className="form">
          <h3>Login into your account</h3>
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
          <button>Login</button>
          <span className="helper">
            Don't have an account? <Link to="/signup"> "Sign Up"</Link>
          </span>
        </form>
      </div>
    </main>
  );
};

export default SignIn;
