import "./App.scss";
import Header from "./components/Header";
import Grid from "./components/Grid";
import SubHeader from "./components/SubHeader";
import { useState } from "react";

function App() {
  const [inEnglish, setInEnglish] = useState(false);

  const switchLang = () => {
    setInEnglish(!inEnglish);
  };

  return (
    <div className="App">
      <Header></Header>
      <SubHeader switchLang={switchLang} inEnglish={inEnglish}></SubHeader>
      <Grid inEnglish={inEnglish}></Grid>
    </div>
  );
}

export default App;
