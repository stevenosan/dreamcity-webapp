

function Intro() {
    return (
          <section id="intro-section">
            <div className="columns">
              <div className="left-column hero">
                <div className="copy">
                  <h1>Welcome to Dream City</h1>
                  <p>Dream city is a gigacity filled with underground gangs, corporate spies, and everything in-between. If you can hack it here, your wildest dreams are possible.</p>
                </div>
              </div>
              <div className="right-column">
                <img src="images/Site_BG.jpg" srcSet="images/Site_BG-p-500.jpeg 500w, images/Site_BG-p-800.jpeg 800w, images/Site_BG-p-1080.jpeg 1080w, images/Site_BG-p-1600.jpeg 1600w, images/Site_BG-p-2000.jpeg 2000w, images/Site_BG-p-2600.jpeg 2600w, images/Site_BG-p-3200.jpeg 3200w, images/Site_BG.jpg 4096w" className="hero-image" />
              </div>
            </div>
          </section>
    );
  }
  
  export default Intro;
  