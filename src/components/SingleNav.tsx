import React from "react";
import { FcMenu } from "react-icons/fc";
import { AiFillFileMarkdown } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { AiOutlineSave } from "react-icons/ai";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import Avatar from "./Avatar";
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
              <span>Save File</span>
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
                to="/files"
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
            <div className="user-card">
              <Avatar username="tacheyon" url="/logo192.png" />
              <button>
                <span>Log Out</span> <BiChevronRight size={20} />
              </button>
            </div>
          </div>
        </aside>
        <main>{children}</main>
      </div>
    </>
  );
};

export default SingleNav;
