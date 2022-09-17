import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Login, loading, setCurrUser, auth, currUser } from "../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
type Inputs = {
  email: string;
  password: string;
};
const SignIn = () => {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(loading);
    await Login(data);
    reset({
      email: "",
      password: "",
    });
    console.log(loading);
  };
  const navigate = useNavigate();
  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrUser(user);
        navigate("/dashboard", { replace: false });
      } else {
        navigate("/login", { replace: false });
      }
    });
  }, []);
  return (
    <main className="main-container">
      <div className="main auth">
        <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
          <h3>Login into your account</h3>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              placeholder="email@gmail.com"
              {...register("email", { required: true })}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="your password"
              {...register("password", { required: true })}
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
