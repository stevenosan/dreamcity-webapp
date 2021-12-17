import './App.css';
import NavBar from './pages/navbar/NavBar'
import Intro from './pages/intro/Intro'
import Orphans from './pages/orphans/Orphans';
import Roadmap from './pages/roadmap/Roadmap';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Orphans />
      <Roadmap />
    </div>
  );
}

export default App;
