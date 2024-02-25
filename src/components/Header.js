import React from "react";
import TypeAnimation from "react-type-animation";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  return (
    <header className="header">
      <div className="header__typingtext">
        <TypeAnimation
          cursor={false}
          sequence={[
            "*Christian",
            1000,
            "*Caracach",
            1000,
            "*Frontend",
            1000,
            "*React",
            1000,
          ]}
          repeat={20}
          wrapper="h1"
        />
      </div>
      <div className="header__social">
        <a
          href="mailto:christiancaracach@gmail.com"
          className="header__icon"
          rel="noreferrer"
          target="_blank"
        >
          <EmailIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/christian-caracach/"
          className="header__icon"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/Chriscaracach"
          className="header__icon"
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://drive.google.com/file/d/1whHYRqXlLShilXiKkvUgm3VJC1TC9dOE/view?usp=sharing"
          className="header__icon"
          rel="noreferrer"
          target="_blank"
        >
          <DescriptionIcon fontSize="large" />
        </a>
      </div>
    </header>
  );
};

export default Header;
