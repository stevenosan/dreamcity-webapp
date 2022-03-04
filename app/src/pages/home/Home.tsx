import Intro from '../intro/Intro'
import What from '../what/What';
import Process from '../process/Process';
import Roadmap from '../roadmap/Roadmap';
import OurTeam from '../our-team/OurTeam';
import Faqs from '../faqs/Faqs'

function Home() {

    return(
    <div>
        <Intro />
        <What />
        <Process />
        <OurTeam />
        <Roadmap />
        <Faqs />
    </div>
    );

}

export default Home