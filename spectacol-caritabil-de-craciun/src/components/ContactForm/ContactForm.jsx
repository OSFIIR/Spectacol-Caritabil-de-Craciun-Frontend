import { useRef, useState } from "react";
import bowtie from "../../assets/svg/bow-sticker.svg";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef(null);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const send = () =>
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

    send()
      .catch(() => send())
      .then((result) => {
        console.log(result.text);
        alert("Mesaj trimis cu succes");
        formRef.current.reset();
      })
      .catch((error) => {
        console.log(error.text);
        alert("Trimitere esuata");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact-page-wrapper">
      <section className="contact-container">
        <img className="bow-tie" src={bowtie} alt="Fundita" />
        <form className="column" ref={formRef} onSubmit={handleOnSubmit}>
          <div className="first-row">
            <div className="input-grup">
              <label htmlFor="name">Nume</label>
              <input id="name" type="text" name="name" required />
            </div>

            <div className="input-grup">
              <label htmlFor="phone">Număr de telefon</label>
              <input id="phone" type="tel" name="phone" />
            </div>
          </div>

          <div className="second-row">
            <div className="input-grup">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" required />
            </div>
          </div>

          <div className="third-row">
            <div className="input-grup">
              <label htmlFor="message">Mesaj</label>
              <textarea id="message" name="message" rows="5" required />
            </div>
          </div>

          <button type="submit" className="send-btn" disabled={isSending}>
            {isSending ? "Se trimite..." : "Trimite"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;