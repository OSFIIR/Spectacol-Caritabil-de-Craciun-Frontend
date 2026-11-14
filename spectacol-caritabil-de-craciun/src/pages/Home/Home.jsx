import Hero from '../../components/Hero/Hero';
import AboutShow from '../../components/AboutShow/AboutShow';
import Gallery from '../../components/Gallery/Gallery';
import Faq from '../../components/Faq/Faq';
import ComingSoon from '../../components/ComingSoon/ComingSoon';

import './Home.scss';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
       <AboutShow />
       {/*<ComingSoon />*/}
       <Gallery />
       <Faq />
    </main>
  );
};

export default Home;