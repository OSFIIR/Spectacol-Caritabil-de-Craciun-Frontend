import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
import { Artists, Donate, Home, Sponsors, Team, Contact } from './index.js';
import CustomCursor from './hooks/CustomCursor/CustomCursor.jsx';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ScrollTop from './hooks/ScrollTop.jsx';
import { useGlobalSwipe } from './hooks/useGlobalSwipe.jsx';

const ROUTES_ORDER = ['/', '/artists', '/sponsors', '/team'];

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const goNextPage = () => {
    const currentIndex = ROUTES_ORDER.indexOf(location.pathname);
    if (currentIndex !== -1 && currentIndex < ROUTES_ORDER.length - 1) {
      navigate(ROUTES_ORDER[currentIndex + 1]);
    }
  };

  const goPrevPage = () => {
    const currentIndex = ROUTES_ORDER.indexOf(location.pathname);
    if (currentIndex > 0) {
      navigate(ROUTES_ORDER[currentIndex - 1]);
    }
  };

  useGlobalSwipe(goNextPage, goPrevPage);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/team" element={<Team />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <Preloader />
      <CustomCursor />
      <Navbar />
      <ScrollTop>
        <AppContent />
      </ScrollTop>
      <Footer />
    </div>
  );
}

export default App;