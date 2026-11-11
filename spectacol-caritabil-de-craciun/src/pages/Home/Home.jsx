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

export default Home;