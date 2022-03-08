import "./App.scss";
import Presentation from "./components/Presentation";
import Header from "./components/Header";
import Grid from "./components/Grid";
import SubHeader from "./components/SubHeader";
import { useState } from "react";
import OtherProjects from "./components/OtherProjects";

function App() {
  const [inEnglish, setInEnglish] = useState(false);

  const switchLang = () => {
    setInEnglish(!inEnglish);
  };

  return (
    <div className="App">
      <Header></Header>
      <SubHeader switchLang={switchLang} inEnglish={inEnglish}></SubHeader>
      <Presentation inEnglish={inEnglish}></Presentation>
      <Grid inEnglish={inEnglish}></Grid>
      <OtherProjects inEnglish={inEnglish}></OtherProjects>
    </div>
  );
}

export default App;
