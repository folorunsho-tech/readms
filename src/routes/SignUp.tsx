import React from "react";
import { AddUser, loading } from "../firebase/auth";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  username: string;
  email: string;
  password: string;
};
const SignUp = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await AddUser(data);
    reset({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <main className="main-container">
      <div className="main auth">
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <h3>Signup for an account</h3>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="e.g. bob"
              {...register("username", { required: true })}
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="email@gmail.com"
              {...register("email", { required: true })}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="your password"
              {...register("password", { required: true, min: 6 })}
            />
          </div>
          <button type="submit">Sign Up</button>
          <span className="helper">
            Already have an account? <Link to="/login"> "Login"</Link>
          </span>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
