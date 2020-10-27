import React from "react";

import SideContainer from "./containers/SideContainer/SideContainer";
import MainContainer from "./containers/MainContainer/MainContainer";

import classes from "./App.module.scss";

function App() {
  return (
    <main className={classes.main}>
      <SideContainer />
      <MainContainer />
    </main>
  );
}

export default App;
