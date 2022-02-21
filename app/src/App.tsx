import './App.sass';
import NavBar from './pages/navbar/NavBar'
import Intro from './pages/intro/Intro'
import What from './pages/what/What';
import Process from './pages/process/Process';
import Mint from './pages/mint/Mint';
import Orphans from './pages/orphans/Orphans';
import Roadmap from './pages/roadmap/Roadmap';
import OurTeam from './pages/our-team/OurTeam';
import Faqs from './pages/faqs/Faqs';

function App() {
  return (
    <main>
      <NavBar />
      <Intro />
      <What />
      <Process />
      <Mint />
      <OurTeam />
      <Roadmap />
      <Faqs />
    </main>
  );
}

export default App;
