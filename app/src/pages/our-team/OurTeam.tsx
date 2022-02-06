

function OurTeam() {
    return (
      <section id="ourteam-section" className="team">
          <div className="rows">
            <h2 className="team-heading">// Our Team</h2>
          </div>
            <div className="rows">
              <div className="team-member">
                <a href="https://twitter.com/wakeupbrandon" target="_blank">
                  <img src="images/brandon-dc-art.png" alt="" />
                  <div className="team-dox">
                    <p className="team-name">Brandon Mullins</p>
                    <p className="team-position">Founder / Art / Design / Dev</p>
                  </div>
                </a>
              </div>
              <div className="team-member">
                <img src="images/michelle-dc-lore.png" alt="" />
                <div className="team-dox">
                  <p className="team-name">Michelle Amos</p>
                  <p className="team-position">Lore Master</p>
                </div>
              </div>
              <div className="team-member">
                <a href="https://twitter.com/dreamcitynft" target="_blank">
                  <img src="images/matt-dc-marketing.png" alt="" />
                  <div className="team-dox">
                    <p className="team-name">Matt Cook</p>
                    <p className="team-position">Community Engagement</p>
                  </div>
                </a>
              </div>
              <div className="team-member">
                <a href="https://twitter.com/empirikal" target="_blank">
                  <img src="images/carl-dc-partnerships.png" alt="" />
                  <div className="team-dox">
                    <p className="team-name">Carl DeCaire</p>
                    <p className="team-position">Partnerships / Advisor</p>
                  </div>
                </a>
              </div>
              <div className="team-member">
                <img src="images/steve-dc-engineer.png" alt="" />
                <div className="team-dox">
                  <p className="team-name">Steve Nosan</p>
                  <p className="team-position">Engineer</p>
                </div>
              </div>
              <div className="team-member">
                <img src="images/joe-dc-moderator.png" alt="" />
                <div className="team-dox">
                  <p className="team-name">Joe Santavicca</p>
                  <p className="team-position">Community Moderator</p>
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
  