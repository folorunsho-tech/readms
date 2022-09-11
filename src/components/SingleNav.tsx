import React from "react";
import { FcMenu } from "react-icons/fc";
import { AiFillFileMarkdown } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineSave } from "react-icons/ai";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";

interface Props {
  children?: ReactNode;
  file?: object;
  // any props that come into the component
}
const SingleNav = ({ children, file }: Props) => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  return (
    <>
      <nav className="single-nav">
        <button
          className={`hamburger-button `}
          onClick={() => {
            setShowSideBar(!showSideBar);
          }}
        >
          <FcMenu
            className={` ${
              showSideBar === true ? "hamburger-button-transform" : ""
            }`}
          />
        </button>
        <div className="header-container">
          <div className="nav-title">
            <AiFillFileMarkdown size={25} />
            <p>Welcome.md</p>
          </div>
          <div className="nav-cta">
            <button id="delete">
              <FiTrash2 />
            </button>
            <button id="save">
              <AiOutlineSave />
            </button>
          </div>
        </div>
      </nav>
      <div className="main-container">
        <aside
          className={`sidebar ${showSideBar === true ? "sidebar-visible" : ""}`}
        >
          <div className="sidebar-nav">
            <h2
              style={{
                padding: "1rem",
              }}
            >
              Readms
              <hr />
            </h2>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "3rem",
                padding: " 1rem",
                marginTop: "-12rem",
                overflowY: "auto",
              }}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  padding: "1rem ",
                  borderRadius: "2px",
                  color: "white",
                }}
              >
                <AiFillHome /> Home
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  padding: "1rem",
                  borderRadius: "2px",
                  color: "white",
                }}
              >
                <AiFillFileMarkdown /> Files
              </NavLink>
              <NavLink
                to="/settings"
                className={({ isActive }) =>
                  isActive ? "active nav-link" : "nav-link"
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  fontSize: "1.2rem",
                  textDecoration: "none",
                  padding: "1rem",
                  borderRadius: "2px",
                  color: "white",
                }}
              >
                <AiFillSetting /> Settings
              </NavLink>
            </nav>
            <div className="user-card"></div>
          </div>
        </aside>
        <main className="main">{children}</main>
      </div>
    </>
  );
};

export default SingleNav;
