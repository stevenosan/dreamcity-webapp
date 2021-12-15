

function Intro() {
    return (
        <div id="intro-section" className="intro wf-section">
        <div className="columns w-row">
          <div className="intro-column w-col w-col-6">
            <div className="intro-copy">
              <h1 className="heading">Welcome to Dream City</h1>
              <p className="paragraph">Dream city is a gigacity filled with underground gangs, corporate spies, and everything in-between. If you can hack it here, your wildest dreams are possible.</p>
            </div>
          </div>
          <div className="column-2 w-col w-col-6"><img src="images/Site_BG.jpg" loading="lazy" sizes="(max-width: 767px) 100vw, 50vw" height="634" srcSet="images/Site_BG-p-500.jpeg 500w, images/Site_BG-p-800.jpeg 800w, images/Site_BG-p-1080.jpeg 1080w, images/Site_BG-p-1600.jpeg 1600w, images/Site_BG-p-2000.jpeg 2000w, images/Site_BG-p-2600.jpeg 2600w, images/Site_BG-p-3200.jpeg 3200w, images/Site_BG.jpg 4096w" alt="" className="image-2" /></div>
        </div>
      </div>
    );
  }
  
  export default Intro;
  