import './App.css';
import NavBar from './pages/navbar/NavBar'
import Intro from './pages/intro/Intro'
import Orphans from './pages/orphans/Orphans';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Orphans />
    </div>
  );
}

export default App;
