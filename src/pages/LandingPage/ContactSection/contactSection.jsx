import React, { useRef, useState } from "react";
import "./contactSection.scss";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FiGithub, FiLinkedin, FiTwitter, FiSend } from "react-icons/fi";
import { AiOutlineLoading } from "react-icons/ai";
import Snackbar from "../../../components/Snackbar/snackbar";

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
        setSnackbarMessage("Message sent successfully!");
        setShowSnackbar(true);
      })
      .catch((err) => {
        setSnackbarType("error");
        setSnackbarMessage("Failed to send message. Please try again.");
        setShowSnackbar(true);
        setSubmitDisabled(false);
      });
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-bg-glow" />
        
        <motion.div 
          className="contact-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-card">
            {/* Left Pane - Info */}
            <div className="contact-info">
              <div className="info-header">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Let's Connect
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </motion.p>
              </div>

              <div className="info-details">
                <div className="social-links">
                  <a href="https://github.com/shashwatrathod" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href="https://linkedin.com/in/shashwatrathod" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FiLinkedin />
                  </a>
                  <a href="https://twitter.com/shashwatrathod" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <FiTwitter />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Pane - Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={submitOnClick}>
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    ref={nameRef}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="name">Name</label>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    ref={emailRef}
                    required
                    placeholder=" "
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    ref={subjectRef}
                    placeholder=" "
                  />
                  <label htmlFor="subject">Subject</label>
                </div>

                <div className="form-group full-width">
                  <textarea
                    id="message"
                    ref={messageRef}
                    required
                    placeholder=" "
                    rows="4"
                  />
                  <label htmlFor="message">Message</label>
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${submitDisabled ? 'disabled' : ''}`}
                  disabled={submitDisabled}
                >
                  {submitDisabled ? <AiOutlineLoading className="spinner" /> : <FiSend />}
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </motion.div>
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
