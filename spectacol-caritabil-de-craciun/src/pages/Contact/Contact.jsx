import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactHeading from "../../components/ContactHeading/ContactHeading";

const Contact = () => {
 return(
      <section className="contact-page">
            <ContactHeading />
            <ContactForm />
      </section>
 );
}

export default Contact;