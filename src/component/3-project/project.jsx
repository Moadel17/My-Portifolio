import { FaArrowRight, FaLink } from "react-icons/fa";
import { buttons, cards } from "./dataComponent";
import "./project.css";
import { useContext, useState } from "react";
import { Window } from "../../context/windowWidth";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects({ darkMode }) {
  const [cardArr, setCardArr] = useState(cards);
  const [active, setActive] = useState("All Projects");
  const isWindow = useContext(Window);

  return (
    <div
      className={darkMode ? "project" : "project-dark"}
      style={{ flexDirection: isWindow > 1200 ? "row" : "column" }}>
      <div
        className={darkMode ? "project-left" : "project-left-dark"}
        style={{
          flexDirection: isWindow > 1200 ? "column" : "row",
          flexWrap: isWindow > 1200 ? "nowrap" : "wrap",
          justifyContent: isWindow > 1200 ? "normal" : "space-evenly",
        }}>
        {buttons.map((btn, key) => {
          return (
            <button
              style={{ flexDirection: isWindow > 1100 ? "column" : "row" }}
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
      <div
        className={darkMode ? "project-right" : "project-right-dark"}
        style={{
          justifyContent: isWindow > 1200 ? "left" : "center",
          paddingLeft: isWindow > 1200 ? "0" : "40px",
          marginTop: isWindow > 1200 ? "0" : "50px",
        }}>
        <AnimatePresence>
          {cardArr.map((card, key) => {
            return (
              <motion.div
                key={key}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() =>
                  window.open(
                    "https://moadel17.github.io/Travel-Website/",
                    "_blank",
                  )
                }
                className={darkMode ? "cards-box" : "cards-box-dark"}>
                <img src={card.img} alt="" style={{ width: "100%" }} />
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <div className="links-box">
                  <a
                    onClick={() =>
                      window.open(
                        "https://moadel17.github.io/Travel-Website/",
                        "_blank",
                      )
                    }>
                    <FaLink style={{ fontSize: "18px" }} />
                  </a>
                  <a
                  //   onClick={() =>
                  //     window.open(
                  //       "https://moadel17.github.io/Travel-Website/",
                  //       "_blank",
                  //     )
                  //   }
                  >
                    More <FaArrowRight />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
