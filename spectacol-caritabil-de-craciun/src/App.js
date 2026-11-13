import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Artists, Donate, Home, Sponsors, Team } from './index.js';
import CustomCursor from './hooks/CustomCursor/CustomCursor.jsx';
import { Routes, Route } from 'react-router-dom';
import ScrollTop from './hooks/ScrollTop.jsx';

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
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