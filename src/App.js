// App.js
// App.js
import React from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils" />
      <Alert />
      <div>
        <Textform />
      </div>
    </div>
  );
}

export default App;
