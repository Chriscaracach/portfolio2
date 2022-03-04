import React from "react";
import TypeAnimation from "react-type-animation";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  return (
    <header className="container" id="header">
      <div className="header__typingtext">
        <TypeAnimation
          cursor={false}
          sequence={["Christian", 1000, "Caracach", 1000]}
          repeat={20}
          wrapper="h3"
        />
      </div>
      <div className="header__social">
        <LinkedInIcon />
        <EmailIcon />
        <GitHubIcon />
      </div>
    </header>
  );
};

export default Header;
