import "./header.css";
import { useContext, useState } from "react";
import { FaBars, FaRegMoon, FaSun } from "react-icons/fa";
import { Window } from "../../context/windowWidth";
import { IoClose } from "react-icons/io5";

export default function Header({ darkMode, setDarkMode }) {
  const isWindow = useContext(Window);
  const [fixedOpen, setFixedOpen] = useState(false);

  return (
    <div className="header">
      <div
        onClick={() => setFixedOpen(true)}
        className={darkMode ? "btn" : "dark"}
        style={{
          display: isWindow > 730 ? "none" : "block",
        }}>
        <FaBars />
      </div>
      <div />
      <div
        className={darkMode ? "header-div" : "header-div-dark"}
        style={{
          display: isWindow > 730 ? "flex" : "none",
        }}>
        <p>
          <a href="#" onClick={() => window.location.reload()}>
            Home
          </a>
        </p>
        <p>
          <a href="#projects">Projects</a>
        </p>
        <p>
          <a href="#contact">Contact Me</a>
        </p>
      </div>
      {fixedOpen && (
        <div
          className="fixed"
          style={{ display: isWindow > 730 ? "none" : "block" }}>
          <ul className={darkMode ? "fixed-ul" : "fixed-ul-dark"}>
            <li>
              <IoClose
                className={darkMode ? "icon-close" : "icon-close-dark"}
                onClick={() => setFixedOpen(false)}
              />
            </li>
            <li onClick={() => window.location.reload()}>
              <a href="#">Home</a>
            </li>
            <li onClick={() => setFixedOpen(false)}>
              <a href="#projects">Projects</a>
            </li>
            <li onClick={() => setFixedOpen(false)}>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      )}
      <div>
        <button
          className={darkMode ? "btn" : "dark"}
          onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? (
            <FaSun className="btn-light-mode" />
          ) : (
            <FaRegMoon className="btn-night-mode" />
          )}
        </button>
      </div>
    </div>
  );
}
