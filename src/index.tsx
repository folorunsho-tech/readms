import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import File from "./routes/File";
import Settings from "./routes/Settings";
import Files from "./routes/Files";
import SignUp from "./routes/SignUp";
import SignIn from "./routes/SignIn";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/files" element={<Files />} />
        <Route path="/files/:id" element={<File />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
