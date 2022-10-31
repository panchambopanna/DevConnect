import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./compnents/layout/Navbar";
import Landing from "./compnents/layout/Landing";
import Register from "./compnents/auth/Register";
import Login from "./compnents/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
        </Routes>
        <section className="container">
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
