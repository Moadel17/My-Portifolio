import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer.css";
export default function Footer({ darkMode }) {
  return (
    <footer className={darkMode ? "footer" : "footer-dark"}>
      <h2>Mohamed Adel</h2>
      <p>Frontend Developer building modern web experiences.</p>©
      {new Date().getFullYear()} Mo Adel. All rights reserved.
    </footer>
  );
}
