import React from 'react';
import useDarkMode from 'use-dark-mode';

export default function DarkModeToggle(){
  const darkMode = useDarkMode(false);

  return (
    <div className="darkMode">
      <button className="lightButton" type="button" onClick={darkMode.disable}>
        ☀
      </button>

      <button className="darkButton" type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </div>
  );
}