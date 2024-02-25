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

const Presentation = ({ lang }) => {
  return (
    <div className="presentation">
      <h1 className="title">{lang === "spanish" ? "Sobre mí" : "About me"}</h1>
      <div className="presentation__container">
        <img
          className="presentation__img"
          alt="Christian Caracach"
          src={profilePhoto}
        />
        <p>{lang === "spanish" ? esPresentation : enPresentation}</p>
      </div>
      <div className="presentation__techcontainer">
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
