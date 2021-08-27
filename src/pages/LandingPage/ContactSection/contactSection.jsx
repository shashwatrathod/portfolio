import React, { useRef, useState } from "react";
import "./contactSection.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import emailjs from "emailjs-com";
import { AiOutlineLoading } from "react-icons/ai";
import Snackbar from "../../../components/Snackbar/snackbar";
import Slide from "react-reveal/Slide";

const ContactSection = () => {
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarType, setSnackbarType] = useState("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  const submitOnClick = (e) => {
    e.preventDefault();
    setSubmitDisabled(true);

    let template_params = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      subject: subjectRef.current.value || "From Portfolio",
      message: messageRef.current.value,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        template_params,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((res) => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        subjectRef.current.value = "";
        messageRef.current.value = "";
        setSubmitDisabled(false);

        setSnackbarType("success");
        setSnackbarMessage("Message sent!");
        setShowSnackbar(true);
      })
      .catch((err) => {
        setSnackbarType("error");
        setSnackbarMessage(
          "Sorry, we couldn't send your message. Please try again later."
        );
        setShowSnackbar(true);
        setSubmitDisabled(false);
      });
  };

  return (
    <>
      <section id="contact">
        <div className="contact-container">
          <div className="contact-main-grid">
            <div className="contact-title-container">
              <Slide up>
                <div className="contact-title">Say Hello!</div>
                <div className="contact-subtitle">contact me</div>
              </Slide>
            </div>
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={submitOnClick}>
                <input
                  type="text"
                  id="name-field"
                  name="name"
                  autoComplete="name"
                  placeholder="Name*"
                  className="contact-form-field"
                  aria-label="Name"
                  ref={nameRef}
                  required
                />
                <input
                  type="email"
                  id="email-field"
                  name="email"
                  autoComplete="email"
                  placeholder="Email*"
                  className="contact-form-field"
                  aria-label="email"
                  ref={emailRef}
                  required
                />
                <input
                  type="text"
                  id="subject-field"
                  name="subject"
                  placeholder="Subject"
                  className="contact-form-field"
                  aria-label="Subject"
                  ref={subjectRef}
                />
                <textarea
                  id="message-field"
                  name="message"
                  placeholder="Message*"
                  className="contact-form-field"
                  aria-label="Message"
                  ref={messageRef}
                  required
                />
                <button
                  type="submit"
                  className="contact-form-submit-btn"
                  disabled={submitDisabled}
                >
                  {submitDisabled ? (
                    <AiOutlineLoading className="contact-form-spinner" />
                  ) : (
                    <HiOutlineArrowNarrowRight />
                  )}
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Snackbar
        showSnackbar={showSnackbar}
        setShowSnackbar={setShowSnackbar}
        type={snackbarType}
        message={snackbarMessage}
      />
    </>
  );
};

export default ContactSection;
