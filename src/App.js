import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  //age initialized krte hbe. jdi darkmode on thke but user refresh kre thle dark mode ta by default normal hye jai but ai function ta seta k aatkate help krbe.

  // by default behaviour aatkate localstorage a dark mode take store krate hbe and ata string return kre tai ake parse krte hbe.same use effect er mddheo krte hbe.

  const getMode = () => {
    return JSON.parse(localStorage.getItem("mode"));
  }

  const [darkMode, setDarkMode] = useState(getMode()); //trpor call krte hbe

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <div className='content'>
        <h1>{darkMode ? "Dark mode is on" : "Light mode is on"}</h1>
        <p>Want to see some magic ? press toggle button</p>
      </div>

      <div className='nav'>
        <label className='switch'>
          <input type='checkbox' onChange={() => setDarkMode(!darkMode)} checked={darkMode} />
          <span className='slider round'></span>
        </label>
      </div>

    </div>
  );
}

export default App;
