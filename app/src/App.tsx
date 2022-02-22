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
import React from 'react';

class App extends React.Component {
  render() {
    return (    <main>
      <NavBar />
      <Intro />
      <What />
      <Process />
      <Mint />
      <section id="candymachine"></section>
      <OurTeam />
      <Roadmap />
      <Faqs />
    </main>);
  }

  componentDidMount() {
    const script = document.createElement("script");

    script.src = "candy-machine.js";
    script.async = true;

    document.body.appendChild(script);
  }
}

// function App() {

//   return (
//     <main>
//       <NavBar />
//       <Intro />
//       <What />
//       <Process />
//       <Mint />
//       <OurTeam />
//       <Roadmap />
//       <Faqs />
//       <div id="candymachine"></div>
//     </main>
//   );
// }

export default App;
