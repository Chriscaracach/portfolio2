import React from "react";

const SubHeader = ({ inEnglish, switchLang }) => {
  return (
    <div className="subheader">
      <button
        type="button"
        class={"nes-btn subheader__button " + (inEnglish ? "is-disabled" : "")}
        onClick={switchLang}
      >
        English
      </button>
      <button
        type="button"
        class={"nes-btn subheader__button " + (!inEnglish ? "is-disabled" : "")}
        onClick={switchLang}
      >
        Español
      </button>
    </div>
  );
};

export default SubHeader;
