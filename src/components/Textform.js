import React, { useState } from "react";
import Alert from "./Alert";

export default function Textform(props) {
  const [text, setText] = useState(""); // Manage text input state
  const [alertMessage, setAlertMessage] = useState(""); // Manage alert message state

  // Convert text to uppercase
  const touppercase = () => {
    if (text.trim().length > 0) {
      setText(text.toUpperCase());
      setAlertMessage("Converted to uppercase!");
    } else {
      setAlertMessage("No text to convert!");
    }
  };

  // Convert text to lowercase
  const tolowercase = () => {
    if (text.trim().length > 0) {
      setText(text.toLowerCase());
      setAlertMessage("Converted to lowercase!");
    } else {
      setAlertMessage("No text to convert!");
    }
  };

  // Clear text
  const tocleardata = () => {
    if (text.trim().length > 0) {
      setText("");
      setAlertMessage("Text cleared!");
    } else {
      setAlertMessage("No text to clear!");
    }
  };

  return (
    <>
      <div className="container">
        {/* Heading */}
        <h1>{props.heading}</h1>

        {/* Alert */}
        <Alert message={alertMessage} />

        {/* Textarea */}
        <div className="mb-3">
          <textarea
            id="description"
            rows="7"
            className="textarea-class"
            style={{ width: "100%" }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your text here..."
          ></textarea>
        </div>

        {/* Buttons */}
        <button className="btn btn-primary mx-1" onClick={touppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={tolowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={tocleardata}>
          Clear
        </button>
      </div>

      {/* Text Summary */}
      <div className="container mt-4">
        <h2>Your Text Summary</h2>
        <p>
          Total words: {text.split(/\s+/).filter((word) => word).length} | Total
          characters: {text.length}
        </p>
        <p>
          Estimated reading time:{" "}
          {(0.008 * text.split(/\s+/).filter((word) => word).length).toFixed(2)}{" "}
          minutes
        </p>
      </div>
    </>
  );
}
