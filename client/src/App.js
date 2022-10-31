import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./compnents/layout/Navbar";
import Landing from "./compnents/layout/Landing";

function App() {
  return (
    <Fragment className="App">
      <Navbar />
      <Landing />
    </Fragment>
  );
}

export default App;
