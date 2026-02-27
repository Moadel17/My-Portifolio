import { useEffect, useState } from "react";
import Header from "./component/1-header/header";
import Home from "./component/2-home/home";
import Projects from "./component/3-project/project";
import Contact from "./component/4-contact/contact";
import { IoIosArrowUp } from "react-icons/io";
import Footer from "./component/5-footer/footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY));

    return () =>
      window.removeEventListener("scroll", () => setScroll(window.scrollY));
  }, []);

  return (
    <div className={darkMode ? "body" : "body-dark"}>
      <div className={darkMode ? "container" : "container-dark"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Home darkMode={darkMode} />
        <div className={darkMode ? "line" : "line-dark"} />
        <Projects path="/projects" darkMode={darkMode} />
        <div className={darkMode ? "line" : "line-dark"} />
        <Contact darkMode={darkMode} />
        <div className={darkMode ? "line" : "line-dark"} />
        <Footer />
      </div>
      {scroll >= 300 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-arrow">
          <IoIosArrowUp />
        </button>
      )}
    </div>
  );
}
