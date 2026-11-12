import React from "react";
import "./Artists.scss";
import ArtistIntro from "../../components/ArtistsIntro/ArtistsIntro";
import ArtistsCarousel from "../../components/ArtistsCarousel/ArtistsCarousel";
import Schedule from "../../components/Schedule/Schedule";

const Artists = () => {
 return(
  <section className="artists-page">
    <ArtistIntro />
    <ArtistsCarousel />
    <Schedule />
  </section>
 );
}

export default Artists;