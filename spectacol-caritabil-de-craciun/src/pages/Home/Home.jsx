<<<<<<< HEAD
import React from "react";
import "./Home.scss";
import Hero from "../../components/Hero/Hero.jsx";

const Home = () => {
 return(
  <section className="home-page">
      <Hero />
  </section>
 );
}
=======
import Hero from '../../components/Hero/Hero';
import AboutShow from '../../components/AboutShow/AboutShow';
import Gallery from '../../components/Gallery/Gallery';
import Faq from '../../components/Faq/Faq';

import './Home.scss';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
       <AboutShow />
       <Gallery />
       <Faq />
    </main>
  );
};
>>>>>>> main

export default Home;