import { VscVerifiedFilled } from "react-icons/vsc";
import HomeImage from "../../Photos/Home.png";
import "./home.css";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import Lottie from "lottie-react";
import lapAnimation from "../../../public/animation/laptop.json";
import { useContext } from "react";
import { Window } from "../../context/windowWidth";
import { motion } from "motion/react";

export default function Home({ darkMode }) {
  const isWindow = useContext(Window);

  return (
    <div className="home">
      <div
        className="home-left"
        style={{ textAlign: isWindow > 1050 ? "left" : "center" }}>
        <div className="home-left-profile">
          {/* Link of animate Web https://motion.dev/docs/react?platform=react */}
          <motion.img
            src={HomeImage}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
            }}
            alt="i"
          />
          <VscVerifiedFilled style={{ color: darkMode ? "black" : "aqua" }} />
          {/* <Lottie
            style={{
              width: "25px",
              verticalAlign: "center",
              marginRight: "10px",
            }}
            className="icon"
            animationData={verify}
          /> */}
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
          }}
          className={darkMode ? "home-h" : "home-h1-dark"}
          style={{ fontSize: isWindow > 1085 ? "40px" : "30px" }}>
          Front-End Developer
        </motion.h1>
        <p
          className={darkMode ? "home-p" : "home-p-dark"}
          style={{ fontSize: isWindow > 1085 ? "14px" : "12px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          omnis, delectus vel explicabo nihil voluptatum voluptate aliquid
          fugiat est laudantium nemo officiis distinctio eum eaque, in ratione
          voluptas, nostrum veritatis sapiente nesciunt non fuga? Fugit dolorem
          deleniti, quas architecto quae optio est adipisci praesentium
          reprehenderit, tempore distinctio enim officiis dignissimos.
        </p>
        <div
          className="home-left-icons"
          style={{ justifyContent: isWindow > 1050 ? "left" : "center" }}>
          <button
            onClick={() =>
              window.open("https://www.facebook.com/me/", "_blank")
            }
            className={darkMode ? "home-left-icon" : "home-left-icon-dark"}>
            <FaFacebook style={{ fontSize: "25px" }} />
          </button>
          {/* <button
            onClick={() =>
              window.open("https://web.whatsapp.com/", "_blank")
            }
            className={darkMode ? "home-left-icon" : "home-left-icon-dark"}>
            <FaTelegramPlane style={{ fontSize: "25px" }} />
          </button> */}
          <button
            onClick={() =>
              window.open("https://www.instagram.com/3de_17/", "_blank")
            }
            className={darkMode ? "home-left-icon" : "home-left-icon-dark"}>
            <FaInstagram style={{ fontSize: "25px" }} />
          </button>
          <button
            onClick={() => window.open("https://github.com/Moadel17", "_blank")}
            className={darkMode ? "home-left-icon" : "home-left-icon-dark"}>
            <FaGithub style={{ fontSize: "25px" }} />
          </button>
        </div>
      </div>
      <div
        className="home-right"
        style={{ display: isWindow > 1050 ? "block" : "none" }}>
        <Lottie
          style={{
            width: isWindow > 1400 ? "500px" : "350px",
            width: isWindow > 1050 ? "350px" : "250px",
          }}
          className="home-right-lapAnimation"
          animationData={lapAnimation}
        />
      </div>
    </div>
  );
}
