import { MdEmail } from "react-icons/md";
import "./contact.css";
import message from "../../../public/animation/contact us.json";
import Lottie from "lottie-react";
import { useContext } from "react";
import { Window } from "../../context/windowWidth";
import { useForm, ValidationError } from "@formspree/react";
import verify from "../../../public/animation/Verify.json";

export default function Contact({ darkMode }) {
  const isWindow = useContext(Window);
  const [state, handleSubmit] = useForm("mbdawnlj");

  return (
    <div className={darkMode ? "contact" : "contact-dark"} id="contact">
      <div
        className={darkMode ? "contact-left" : "contact-left-dark"}
        style={{
          width: isWindow > 1050 ? "60%" : "100%",
          textAlign: isWindow > 1050 ? "left" : "center",
        }}>
        <h2>
          <span>
            <MdEmail />
          </span>
          Contact Me
        </h2>
        <h5>Contact me for more information and see my new projects.</h5>

        <form
          onSubmit={handleSubmit}
          className={darkMode ? "form" : "form-dark"}
          style={{
            alignItems: isWindow > 1050 ? "normal" : "center",
          }}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your Email"
            style={{
              width: isWindow > 1050 ? "70%" : "100%",
              textAlign: "left",
            }}
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <label>Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter Your Message"
            style={{
              minHeight: "150px",
              width: isWindow > 1050 ? "70%" : "100%",
            }}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className="btn">
            Submit
          </button>
          {state.succeeded && (
            <p style={{ fontSize: "20px", display: "flex" }}>
              <Lottie
                style={{
                  width: "25px",
                  verticalAlign: "center",
                  marginRight: "10px",
                }}
                animationData={verify}
              />
              Thanks for your message
            </p>
          )}
        </form>
      </div>
      <div
        className="contact-right"
        style={{ display: isWindow > 1050 ? "flex" : "none" }}>
        <Lottie className="icon" animationData={message} />
      </div>
    </div>
  );
}
