import { useState, useRef } from "react";
import { validateEmail } from "../../utils/validate-email";
import emailjs from "@emailjs/browser";

const Connect = (theme) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

  // occur when an input box is clicked on
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        switch (inputType) {
        case "fname":
            if (errorMessage) {
            setErrorMessage("");
            }
            setFname(inputValue);
            break;
        case "lname":
            if (errorMessage) {
            setErrorMessage("");
            }
            setLname(inputValue);
            break;
        case "email":
            if (errorMessage) {
            setErrorMessage("");
            }
            setEmail(inputValue);
            break;
        case "phone":
            if (errorMessage) {
            setErrorMessage("");
            }
            setPhone(inputValue);
            break;
        default:
            if (errorMessage) {
            setErrorMessage("");
            }
            setMessage(inputValue);
            break;
        }
    };

  // occurs when nothing is type in the input box
  const handleIncompleteInput = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    switch (inputType) {
      case "fname":
        if (inputValue === "") {
          setErrorMessage("Please enter your first name.");
          return;
        }
        setFname(inputValue);
        break;
      case "lname":
        if (inputValue === "") {
          setErrorMessage("Please enter your last name.");
          return;
        }
        setLname(inputValue);
        break;
      case "email":
        if (inputValue === "") {
          setErrorMessage("Please enter an email.");
          return;
        }
        setEmail(inputValue);
        break;
      case "phone":
        if (inputValue === "") {
          setErrorMessage("Please enter a phone number.");
          return;
        }
        setPhone(inputValue);
        break;
      default:
        if (inputValue === "") {
          setErrorMessage("Please enter a message.");
          return;
        }
        setMessage(inputValue);
        break;
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!fname) {
      setErrorMessage("Please enter your first name.");
      return;
    } else if (!lname) {
      setErrorMessage("Please enter your last name.");
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage(
        "Please enter an email using the following format: johndoe@email.com ."
      );
      return;
    } else if (!phone) {
      setErrorMessage("Please enter a phone number.");
      return;
    } else if (!message) {
      setErrorMessage("Please enter a message.");
      return;
    } else {
      // occurs after successful submission
      alert(
        `Hello ${fname} ${lname},thank you for submitting a connection form! I look forward to connecting with you!`
      );

      emailjs
        .sendForm(
          "service_d897vsq",
          "template_6smkscy",
          form.current,
          "B-rXE_OJCxk9LI2wk"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      // clears all inputs
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setMessage("");
      setErrorMessage("");
    }
  };

  return (
    <div className="page" id="connect-page">
      <h1 id="connect-page-title">Connect With Me</h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        id={`connect-page-form-${theme.theme}`}
        className="connect-form-layout"
      >
        <section className="contact-form-two-box-row-container">
          <div className="form-sections">
            <input
              name="fname"
              id="fname"
              onChange={handleInputChange}
              onBlur={handleIncompleteInput}
              className={`all-input-boxes all-input-boxes-${theme.theme}`}
              type="text"
              value={fname}
              placeholder="First Name"
            ></input>
          </div>
          <div className="form-sections">
            <input
              name="lname"
              id="lname"
              onChange={handleInputChange}
              onBlur={handleIncompleteInput}
              className={`all-input-boxes all-input-boxes-${theme.theme}`}
              type="text"
              value={lname}
              placeholder="Last Name"
            ></input>
          </div>
        </section>
        <section className="contact-form-two-box-row-container">
          <div className="form-sections">
            <input
              name="email"
              id="email"
              onChange={handleInputChange}
              onBlur={handleIncompleteInput}
              className={`all-input-boxes all-input-boxes-${theme.theme}`}
              type="email"
              value={email}
              placeholder="Email"
            ></input>
          </div>
          <div className="form-sections">
            <input
              name="phone"
              id="phone"
              onChange={handleInputChange}
              onBlur={handleIncompleteInput}
              className={`all-input-boxes all-input-boxes-${theme.theme}`}
              type="text"
              value={phone}
              placeholder="Phone #"
            ></input>
          </div>
        </section>
        <section className="form-sections">
          <textarea
            name="message"
            id="message"
            onChange={handleInputChange}
            onBlur={handleIncompleteInput}
            className={`all-input-boxes all-input-boxes-${theme.theme}`}
            type="text"
            value={message}
            placeholder="Please leave me a message."
          ></textarea>
          <button
            // onClick={handleFormSubmit}
            value="Submit"
            type="submit"
            className="connect-form-submit-button"
            id={`connect-form-submit-button-${theme.theme}`}
          >
            Submit
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </section>
        <section className="connect-form-error-message-container">
          <p id={"connect-form-error-message"}>{errorMessage}</p>
        </section>
      </form>
    </div>
  );
};

export default Connect;
