
import Title from "../Title/title";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

import './ledership.css';


import clubLeadership from "../../data/Leaders";


function Socials({ linkedIn, twitter, facebook, instagram }) {
  return (
    <div className="socials">
      {twitter && (
        <a
          href={twitter}
          className="links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
      )}

      {facebook && (
        <a
          href={facebook}
          className="links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare />
        </a>
      )}

      {linkedIn && (
        <a
          href={linkedIn}
          className="links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      )}

      {instagram && (
        <a
          href={instagram}
          className="links"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagramSquare />
        </a>
      )}
    </div>
  );
}

function LeadersCards({
  leaderName,
  leaderTitle,
  leaderAvata,
  leaderDescription,
  leaderSocials
}) {
  return (
    <div className="leader-cards">
      <h4 className="leader-name">{leaderName}</h4>
      <div className="leader-details">
        <img src={leaderAvata} alt={leaderName} />
        <h3 className="leader-title">{leaderTitle}</h3>
      </div>
      <div className="description">
        <p className="leader-description">{leaderDescription}</p>
      </div>
      <Socials
      twitter={leaderSocials.twitter}
      linkedIn={leaderSocials.linkedIn}
      instagram={leaderSocials.instagram}
      facebook={leaderSocials.facebook}
      />
    </div>
  );
}

function Leaders() {
  return (
    <div className="section">
      <Title
        mainTitle="Guiding Innovators, Leading the Future"
        subTitle="Meet the Visionaries Empowering Tomorrow’s Tech Leaders at MUTC"
      />
      <div className="leaders-container">
        {clubLeadership.map((leaders, index) => (
          <LeadersCards
            key={index}
            leaderName={leaders.leaderName}
            leaderTitle={leaders.leaderTitle}
            leaderAvata={leaders.leaderAvata}
            leaderDescription={leaders.leaderDescription}
            leaderSocials={leaders.socialLinks}
          />
        ))}
      </div>
    </div>
  );
}

export default Leaders;