import React from "react";
import profilePhoto from "../img/perfil cv.jpeg";
import { esPresentation } from "../data/Data";
import { enPresentation } from "../data/Data";

const Presentation = ({ inEnglish }) => {
  return (
    <div className="nes-container is-centered with-title presentation">
      <h1 className="title">Sobre mí</h1>
      <div className="presentation__container">
        <img
          className="nes-avatar is-large presentation__img"
          alt="Gr"
          src={profilePhoto}
        />
        <p className="nes-text">
          {!inEnglish ? esPresentation : enPresentation}
        </p>
      </div>
    </div>
  );
};

export default Presentation;
