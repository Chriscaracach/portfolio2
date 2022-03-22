import React from "react";
import profilePhoto from "../img/perfil cv.jpeg";
import { esPresentation } from "../data/Data";
import { enPresentation } from "../data/Data";
import htmlLogo from "../img/html5.svg";
import sassLogo from "../img/sass.svg";
import bsLogo from "../img/bootstrap.svg";
import reactLogo from "../img/react.svg";
import reduxLogo from "../img/redux.svg";
import githubLogo from "../img/github.svg";

const Presentation = ({ inEnglish }) => {
  return (
    <div className="nes-container is-centered with-title presentation">
      <h1 className="title">{!inEnglish ? "Sobre mí" : "About me"}</h1>
      <div className="presentation__container">
        <img
          className="nes-avatar is-large presentation__img"
          alt="Christian Caracach"
          src={profilePhoto}
        />
        <p className="nes-text">
          {!inEnglish ? esPresentation : enPresentation}
        </p>
      </div>
      <div className="presentation-techcontainer">
        <img src={htmlLogo} alt="" className="presentation__techlogo" />
        <img src={sassLogo} alt="" className="presentation__techlogo" />
        <img src={bsLogo} alt="" className="presentation__techlogo" />
        <img src={reactLogo} alt="" className="presentation__techlogo" />
        <img src={reduxLogo} alt="" className="presentation__techlogo" />
        <img src={githubLogo} alt="" className="presentation__techlogo" />
      </div>
    </div>
  );
};

export default Presentation;
