import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Card = ({
  name,
  esDescription,
  enDescription,
  url,
  repository,
  tech,
  inEnglish,
}) => {
  const [infoIsShowing, setinfoIsShowing] = useState(false);

  const showInfo = () => {
    setinfoIsShowing(!infoIsShowing);
  };
  return (
    <>
      {!infoIsShowing ? (
        <div className="nes-container with-title is-centered card">
          <p className="title card__title">{name}</p>
          <div className="card__bodycontainer">
            <p>{!inEnglish ? esDescription : enDescription}</p>
          </div>
          <div className="card__buttoncontainer">
            <a className="nes-btn card__button" href={repository}>
              Repo
            </a>
            <a className="nes-btn card__button" href={url}>
              Site
            </a>
            <button
              type="button"
              className="nes-btn is-primary card__button"
              onClick={showInfo}
            >
              Tech
            </button>
          </div>
        </div>
      ) : (
        <div className="nes-container with-title is-centered card">
          <p className="title card__title">Título</p>
          <div className="card__infowrapper">
            <div className="card__bodycontainer">
              <div className="card__techcontainer">
                <a href="a" class="nes-badge">
                  <span class="is-primary">{tech[0]}</span>
                </a>
                <a href="a" class="nes-badge">
                  <span class="is-success">{tech[1]}</span>
                </a>
                <a href="a" class="nes-badge">
                  <span class="is-warning">{tech[2]}</span>
                </a>
                <a href="a" class="nes-badge">
                  <span class="is-error">{tech[3]}</span>
                </a>
                <a href="a" class="nes-badge">
                  <span class="is-dark">{tech[4]}</span>
                </a>
              </div>
            </div>
            <div className="card__buttoncontainer">
              <a className="nes-btn card__button" href={repository}>
                Repo
              </a>
              <a className="nes-btn card__button" href={url}>
                Site
              </a>
              <button
                type="button"
                className="nes-btn is-primary card__button"
                style={{ padding: 0 }}
                onClick={showInfo}
              >
                <ArrowBackIcon fontSize="small" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;