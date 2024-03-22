import React, { useState, useRef } from "react";
import Button from "./Button";
const Input = () => {
  const [Text, setText] = useState("");
  const TextRef = useRef(null);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const upperCase = () => {
    setText(Text.toUpperCase());
  };
  const lowerCase = () => {
    setText(Text.toLowerCase());
  };
  const cleartext = () => {
    setText("");
  };
  const trimtext = () => {
    let newText = Text.trim();
    setText(newText);
  };
  const Bold = () => {
    TextRef.current.style.fontWeight = "bold";
  };
  const italic = () => {
    TextRef.current.style.fontStyle = "italic";
  };
  const randomcolor = () => {
    let R = Math.floor(Math.random() * 255) + 1;
    let G = Math.floor(Math.random() * 255) + 1;
    let B = Math.floor(Math.random() * 255) + 1;
    return `rgb(${R},${G},${B})`;
  };
  const colorText = () => {
    TextRef.current.style.color = randomcolor();
  };
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Enter Text
        </label>
        <textarea
          ref={TextRef}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={Text}
          onChange={handleText}
        ></textarea>
        <Button action={upperCase}>UpperCase</Button>
        <Button action={lowerCase}>LowerCase</Button>
        <Button action={cleartext}>Clear Text</Button>
        <Button action={trimtext}>Remove Spaces</Button>
        <Button action={Bold}>Bold Text</Button>
        <Button action={italic}>Italic Text</Button>
        <Button action={colorText}>Get Random Color</Button>
      </div>
      <div>
        <h2>Preview</h2>
        <p ref={TextRef}>{Text}</p>
      </div>
    </>
  );
};

export default Input;
