import React from "react";
import TypeAnimation from "react-type-animation";
import cvDownload from "../img/cvdownload.png";

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
          wrapper="h3"
        />
      </div>
      <div className="header__social">
        <a
          href="mailto:christiancaracach@gmail.com"
          className="header__icon"
          rel="noreferrer"
          target="_blank"
        >
          <i class="nes-icon gmail is-medium"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/christian-caracach/"
          className="header__icon"
          rel="noreferrer"
          target="_blank"
        >
          <i class="nes-icon linkedin is-medium"></i>
        </a>
        <a
          href="https://github.com/Chriscaracach"
          className="header__icon"
          rel="noreferrer"
          target="_blank"
        >
          <i class="nes-icon github is-medium"></i>
        </a>
        <a
          href="https://drive.google.com/file/d/1whHYRqXlLShilXiKkvUgm3VJC1TC9dOE/view?usp=sharing"
          className="header__icon"
          rel="noreferrer"
          target="_blank"
        >
          <img
            class="nes-avatar is-medium"
            alt="Cv Download"
            src={cvDownload}
            style={{
              "image-rendering": "pixelated",
              backgroundColor: "#fefefe",
              borderRadius: "10px",
            }}
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
