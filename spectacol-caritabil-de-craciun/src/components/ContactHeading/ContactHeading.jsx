import "./ContactHeading.css"
import ilex from "../../assets/svg/sticker-ilex.svg"

const ContactHeading = () => {
 return (
      <section className="contact-heading-container">
            <h1 className="contact-heading-title">Vrei să ne transmiți un mesaj?</h1>

            <div className="contact-heading-text-container">
                  <img className="contact-ilex" id="ilex-first" src={ilex} alt="ilex svg" />

                  <p className="contact-heading-text">Dacă ai întrebări sau vrei să iei legătura cu noi, completează formularul pentru a ne transmite un mesaj, iar noi vom reveni la tine în cel mai scurt timp!</p>

                  <img className="contact-ilex" id="ilex-second" src={ilex} alt="ilex svg" />
            </div>
      </section>
 );
}

export default ContactHeading;