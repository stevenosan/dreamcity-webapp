import './App.sass';
import NavBar from './pages/navbar/NavBar'
import LoreStart from './pages/lore/LoreStart'
// import Intro from './pages/intro/Intro'
// import What from './pages/what/What';
// import Process from './pages/process/Process';
// import Roadmap from './pages/roadmap/Roadmap';
// import OurTeam from './pages/our-team/OurTeam';
// import Faqs from './pages/faqs/Faqs';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import MainPane from './pages/MainPane';

class App extends React.Component {
  render() {
    return (
    <main>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={< Home/>} />
          <Route path="/lorestart" element={< LoreStart/>} />
        </Routes>
      </Router>
    </main>
    );
  }
}

export default App;
