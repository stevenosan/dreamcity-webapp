import './App.css';
import NavBar from './pages/navbar/NavBar'
import Intro from './pages/intro/Intro'
import Orphans from './pages/orphans/Orphans';
import Roadmap from './pages/roadmap/Roadmap';
import OurTeam from './pages/our-team/OurTeam';
import Faqs from './pages/faqs/Faqs';

function App() {
  return (
    <div className="wrapper">
      <NavBar />
      <Intro />
      <Orphans />
      <Roadmap />
      <OurTeam />
      <Faqs />
    </div>
  );
}

export default App;
