import React, { useState } from "react";
import Grid from "./Grid";
import SubHeader from "./SubHeader";
import OtherProjects from "./OtherProjects";
import Presentation from "./Presentation";

const Body = () => {
  const [lang, setLang] = useState("spanish");

  const switchLang = (lang) => {
    setLang(lang);
  };

  return (
    <div className="body">
      <SubHeader switchLang={switchLang} lang={lang} />
      <Presentation lang={lang} />
      <Grid lang={lang} />
      <OtherProjects lang={lang} />
    </div>
  );
};

export default Body;
