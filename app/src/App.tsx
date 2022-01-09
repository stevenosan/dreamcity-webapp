import './App.sass';
import NavBar from './pages/navbar/NavBar'
import Intro from './pages/intro/Intro'
import Orphans from './pages/orphans/Orphans';
import Roadmap from './pages/roadmap/Roadmap';
import OurTeam from './pages/our-team/OurTeam';
import Faqs from './pages/faqs/Faqs';

function App() {
  return (
    <main>
      <NavBar />
      <Intro />
      <Orphans />
      <Roadmap />
      <OurTeam />
      <Faqs />
    </main>
  );
}

export default App;
