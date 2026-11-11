import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      {/* Navbar-ul rămâne aici pentru a fi vizibil pe toate paginile */}
      <Navbar />
      
      {/* Aici React va încărca dinamic paginile în funcție de URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Paginile viitoare vor fi adăugate așa: */}
        {/* <Route path="/artists" element={<Artists />} /> */}
        {/* <Route path="/sponsors" element={<Sponsors />} /> */}
        {/* <Route path="/team" element={<Team />} /> */}
        {/* <Route path="/donate" element={<Donate />} /> */}
      </Routes>

      {/* Footer-ul va veni tot aici, sub Routes, la final */}
    </div>
  );
}

export default App;