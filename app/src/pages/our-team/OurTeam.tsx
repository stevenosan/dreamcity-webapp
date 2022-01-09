

function OurTeam() {
    return (
      <section id="ourteam-section" className="team">
          <div className="rows">
            <h2 className="team-heading">// Our Team</h2>
          </div>
            <div className="rows">
              <div className="team-member">
                <img src="images/214.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 767px) 245px, (max-width: 991px) 300px, 14vw" srcSet="images/214-p-500.png 500w, images/214.png 800w" alt="" />
                <div className="team-dox">
                  <p className="team-name">Brandon Mullins</p>
                  <p className="team-position">Founder / Art / Design / Dev</p>
                </div>
              </div>
              <div className="team-member">
                <img src="images/121.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 767px) 245px, (max-width: 991px) 300px, 14vw" srcSet="images/121-p-500.png 500w, images/121.png 800w" alt="" />
                <div className="team-dox">
                  <p className="team-name">Matt Cook</p>
                  <p className="team-position">Core - Community Engagement</p>
                </div>
              </div>
              <div className="team-member">
                <img src="images/78.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 767px) 245px, (max-width: 991px) 300px, 14vw" srcSet="images/78-p-500.png 500w, images/78.png 800w" alt="" />
                <div className="team-dox">
                  <p className="team-name">Michelle Amos</p>
                  <p className="team-position">Core - Lore Master</p>
                </div>
              </div>
              <div className="team-member">
                <img src="images/11.png" loading="lazy" sizes="(max-width: 479px) 83vw, (max-width: 767px) 245px, (max-width: 991px) 300px, 14vw" srcSet="images/11-p-500.png 500w, images/11.png 800w" alt="" />
                <div className="team-dox">
                  <p className="team-name">Carl DeCaire</p>
                  <p className="team-position">Contributor - Research / Advisor</p>
                </div>
              </div>
            </div>
            <div className="rows">
              <p>Our team is a small group of friends that have known each other in real life for over a decade (in some cases longer). We love creativity and are excited about the NFT space for exploring that creativity.</p>
            </div>
        </section>
    );
  }
  
  export default OurTeam
  