import { FaArrowRight, FaLink } from "react-icons/fa";
import { buttons, cards } from "./dataComponent";
import "./project.css";
import { useContext, useState } from "react";
import { Window } from "../../context/windowWidth";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Projects({ darkMode }) {
  const [cardArr, setCardArr] = useState(cards);
  const [active, setActive] = useState("All Projects");
  const isWindow = useContext(Window);

  const projectLeft = (
    <div className={darkMode ? "project-left" : "project-left-dark"}>
      {buttons.map((btn, key) => {
        return (
          <button
            className={btn.title === active ? "active" : null}
            onClick={() => {
              setActive(btn.title);
              if (btn.title === "All Projects") {
                setCardArr(cards);
              } else {
                const filterd = cards.filter(
                  (card) => card.category === btn.category,
                );
                setCardArr(filterd);
              }
            }}
            key={key}>
            {btn.title}
          </button>
        );
      })}
    </div>
  );

  const projectRight = (
    <div className={darkMode ? "project-right" : "project-right-dark"}>
      {cardArr.map((card, key) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          className={darkMode ? "cards-box" : "cards-box-dark"}>
          <img src={card.img} alt="" />

          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <div className="links-box">
            <Link to={card.link , "_blank"}>
              <FaLink style={{ fontSize: "18px" }} />
            </Link>
            <Link to={card.link , "_blank"}>
              {/* don't add to here */}
              More <FaArrowRight />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div id="projects" className={darkMode ? "project" : "project-dark"}>
      {projectLeft}
      {projectRight}
    </div>
  );
}
