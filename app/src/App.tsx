import './App.sass';
import NavBar from './pages/navbar/NavBar'
import Intro from './pages/intro/Intro'
import What from './pages/what/What';
import Process from './pages/process/Process';
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
      <OurTeam />
      <Roadmap />
      <Faqs />
    </main>);
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
