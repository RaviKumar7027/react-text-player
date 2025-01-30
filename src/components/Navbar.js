import React, { useState, useEffect } from "react";

export default function Navbar(props) {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode to the body and header
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("body-dark");
      document.body.classList.remove("body-light");
    } else {
      document.body.classList.add("body-light");
      document.body.classList.remove("body-dark");
    }
  }, [darkMode]);

  // Toggle dark mode state
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        darkMode ? "header-dark" : "header-light"
      }`}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Update the navbar brand to link to the homepage */}
        <a className="navbar-brand" href="/home">
          {props.title}
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                onClick={() => alert("Link clicked")}
              >
                Link
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link disabled" aria-disabled="true">
                Disabled
              </button>
            </li>
          </ul>
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label
              className={`form-check-label ${
                darkMode ? "text-light" : "text-dark"
              }`}
              htmlFor="darkModeSwitch"
            >
              {darkMode ? "Dark Mode" : "Light Mode"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
