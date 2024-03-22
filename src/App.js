import React from "react";
import Navbar from "./components/Navbar";
import Input from "./components/Input";
import "./App.css";
const App = () => {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <Input></Input>
      </div>
    </>
  );
};

export default App;
