import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Card = ({
  name,
  esDescription,
  enDescription,
  url,
  repository,
  tech,
  lang,
}) => {
  const [infoIsShowing, setinfoIsShowing] = useState(false);

  const showInfo = () => {
    setinfoIsShowing(!infoIsShowing);
  };

  return (
    <>
      {!infoIsShowing ? (
        <div className="card">
          <p className="card__title">{name}</p>
          <div className="card__bodycontainer">
            <p>{lang === "spanish" ? esDescription : enDescription}</p>
          </div>
          <div className="card__buttoncontainer">
            <a
              className="card__button card__button-color1"
              href={repository}
              rel="noreferrer"
              target="_blank"
            >
              Repo
            </a>
            <a
              className="card__button card__button-color2"
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              Site
            </a>
            <button
              type="button"
              className="card__button card__button-color3"
              onClick={showInfo}
            >
              Tech
            </button>
          </div>
        </div>
      ) : (
        <div className="card">
          <p className="card__title">{name}</p>
          <div className="card__infowrapper">
            <div className="card__bodycontainer">
              <div className="card__techcontainer">
                <div href="a" className="card__badgecontainer">
                  <span className="card__badge">- {tech[0]}</span>
                </div>
                <div className="card__badgecontainer">
                  <span className="card__badge">- {tech[1]}</span>
                </div>
                <div className="card__badgecontainer">
                  <span className="card__badge">- {tech[2]}</span>
                </div>
                <div className="card__badgecontainer">
                  <span className="card__badge">- {tech[3]}</span>
                </div>
                <div className="card__badgecontainer">
                  <span className="card__badge">- {tech[4]}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card__buttoncontainer">
            <a
              className="card__button card__button-color1"
              href={repository}
              rel="noreferrer"
              target="_blank"
            >
              Repo
            </a>
            <a
              className="card__button card__button-color2"
              href={url}
              rel="noreferrer"
              target="_blank"
            >
              Site
            </a>
            <button
              type="button"
              className="card__button card__button-color3"
              onClick={showInfo}
            >
              <ArrowBackIcon fontSize="small" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
