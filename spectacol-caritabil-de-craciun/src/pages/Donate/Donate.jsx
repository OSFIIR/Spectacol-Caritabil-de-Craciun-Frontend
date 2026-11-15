import React from "react";
import "./Donate.scss";
import DonateHero from "../../components/DonateHero/DonateHero";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Donate = () => {
 return(
  <section className="donate-page">
    <DonateHero />
    <div id="cauza">
      <ComingSoon />
    </div>
  </section>
 );
}

export default Donate;