import React from "react";
import TypeAnimation from "react-type-animation";

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
        <a href="mailto:christiancaracach@gmail.com" className="header__icon">
          <i class="nes-icon gmail is-medium"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/christian-caracach/"
          className="header__icon"
        >
          <i class="nes-icon linkedin is-medium"></i>
        </a>
        <a href="https://github.com/Chriscaracach" className="header__icon">
          <i class="nes-icon github is-medium"></i>
        </a>
        <a href="asd" className="header__icon">
          {/* <ArticleIcon fontSize="large" /> */}
        </a>
      </div>
    </header>
  );
};

export default Header;
