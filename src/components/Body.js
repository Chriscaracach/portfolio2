import React, { useState } from "react";
import Grid from "./Grid";
import SubHeader from "./SubHeader";
import OtherProjects from "./OtherProjects";
import Presentation from "./Presentation";

const Body = () => {
  const [inEnglish, setInEnglish] = useState(false);

  const switchLang = () => {
    setInEnglish(!inEnglish);
  };

  return (
    <div className="App">
      <SubHeader switchLang={switchLang} inEnglish={inEnglish}></SubHeader>
      <Presentation inEnglish={inEnglish}></Presentation>
      <Grid inEnglish={inEnglish}></Grid>
      <OtherProjects inEnglish={inEnglish}></OtherProjects>
    </div>
  );
};

export default Body;
