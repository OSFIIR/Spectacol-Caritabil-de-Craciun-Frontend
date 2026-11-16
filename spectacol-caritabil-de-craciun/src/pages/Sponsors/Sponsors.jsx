import React from "react";
import "./Sponsors.scss";

import ThankYou from "../../components/ThankYou/ThankYou";
import Partners from "../../components/Partners/Partners";

const Sponsors = () => {
 return(
  <section className="sponsors-page">
    <ThankYou />
    <Partners />
  </section>
 );
}

export default Sponsors;