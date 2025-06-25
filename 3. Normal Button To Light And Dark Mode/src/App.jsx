import React, { useState } from 'react';

const App = () => {

  let [theme, setTheme] = useState("Dark Mode");

  let handleTheme = () => {
    setTheme(theme === "Dark Mode" ? "Light Mode" : "Dark Mode");
  };

  let containerCssLightMode = {
    width: "100%",
    height: "100vh",
    backgroundColor: "White",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  let containerCssDracktMode = {
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  let btnCssLightMode = {
    width: "200px",
    height: "50px",
    backgroundColor: "black",
    color: "white",
    border: "1px solid gray",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  let btnCssDarkMode = {
    width: "200px",
    height: "50px",
    backgroundColor: "white",
    color: "black",
    border: "1px solid gray",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <>
      <div style={theme === "Dark Mode" ? containerCssLightMode : containerCssDracktMode}>
        <button onClick={handleTheme} style={theme === "Dark Mode" ? btnCssLightMode : btnCssDarkMode}>
          {theme}
        </button>
      </div>
    </>
  );
};

export default App;