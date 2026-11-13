import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Artists, Donate, Home, Sponsors, Team} from './index.js';
import CustomCursor from './components/CustomCursor/CustomCursor';
import {Routes, Route} from 'react-router-dom';

function AppContent() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/team' element={<Team />} />
      <Route path='/artists' element={<Artists />} />
      <Route path='/donate' element={<Donate />} />
      <Route path='/sponsors' element={<Sponsors />} />
    </Routes>
  );
}

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;
