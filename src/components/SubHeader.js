import React from "react";

const SubHeader = ({ lang, switchLang }) => {
  return (
    <div className="subheader">
      <button
        type="button"
        disabled={lang === "english"}
        className={"subheader__button"}
        onClick={() => switchLang("english")}
      >
        English
      </button>
      <button
        type="button"
        disabled={lang === "spanish"}
        className={"subheader__button"}
        onClick={() => switchLang("spanish")}
      >
        Español
      </button>
    </div>
  );
};

export default SubHeader;
