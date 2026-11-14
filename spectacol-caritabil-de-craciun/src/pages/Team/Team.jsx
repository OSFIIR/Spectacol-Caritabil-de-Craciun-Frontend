import React from "react";
import "./Team.scss";

import TeamIntro from "../../components/TeamIntro/TeamIntro";
import Organization from "../../components/Organization/Organization";
import ComingSoon from "../../components/ComingSoon/ComingSoon";

const Team = () => {
 return(
  <section className="team-page">
    <TeamIntro />
    <Organization />
  </section>
 );
}

export default Team;