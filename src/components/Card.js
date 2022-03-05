import React from "react";

const Card = ({ name, esDescription, enDescription, img, url, repository }) => {
  return (
    <div className="nes-container with-title is-centered card">
      <p className="title card__title">Título</p>
      <p>
        Una descripción bien bonita, en inglés o español, de la app que estamos
        queriendo mostrar.
      </p>
      <div className="card__buttoncontainer">
        <a className="nes-btn card__button" href="w">
          Repo
        </a>
        <a className="nes-btn card__button" href="w">
          Web
        </a>
        <button type="button" className="nes-btn is-primary card__button">
          Info
        </button>
      </div>
    </div>
  );
};

export default Card;
