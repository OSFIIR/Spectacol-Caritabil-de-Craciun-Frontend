import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import {Artists, Donate, Home, Sponsors, Team} from './index.js';
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
      <Navbar />
      <AppContent />
    </div>
  );
}

export default App;
