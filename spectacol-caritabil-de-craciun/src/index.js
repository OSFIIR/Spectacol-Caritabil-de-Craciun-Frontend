import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Am adăugat importul aici
import App from './App';
import './index.css'; // sau './index.scss' dacă ai redenumit fișierul\
import Artists from './pages/Artists/Artists.jsx';
import Donate from './pages/Donate/Donate.jsx';
import Home from './pages/Home/Home.jsx';
import Sponsors from './pages/Sponsors/Sponsors.jsx';
import Team from './pages/Team/Team.jsx';

export {Artists, Donate, Home, Sponsors, Team};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);