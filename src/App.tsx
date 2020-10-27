import React, { useState } from "react";

import SideContainer from "./containers/SideContainer/SideContainer";
import MainContainer from "./containers/MainContainer/MainContainer";

import classes from "./App.module.scss";

enum Units {
  C,
  F,
}

enum ViewType {
  TODAY,
  WEEK,
}

function App() {
  const [viewType, setViewType] = useState(ViewType.WEEK);
  const [unit, setUnit] = useState(ViewType.TODAY);

  return (
    <main className={classes.main}>
      <SideContainer />
      <MainContainer />
    </main>
  );
}

export default App;
