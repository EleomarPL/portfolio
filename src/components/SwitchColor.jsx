import { useEffect, useState } from 'react';

import '../styles/switchColor.css';

const SwitchColor = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    let root = document.documentElement;

    if (isDark) {
      root.style.setProperty('--background-page', '#1f333d');
      root.style.setProperty('--background-navigation', '#091a2e');
      root.style.setProperty('--color-light', '#f9f9f9');
    } else {
      root.style.setProperty('--background-page', 'white');
      root.style.setProperty('--background-navigation', '#F3F3F3');
      root.style.setProperty('--color-light', 'black');
    }
  }, [isDark]);

  return (
    <div className="container-switch-color">
      <input type="checkbox" id="switchColor"
        onChange={ () => setIsDark(!isDark) }
        value={ isDark }
      />
      <label htmlFor="switchColor">
        <span className="visually-hidden-focusable">Cambiar color</span>
        <span></span>
      </label>
    </div>
  );
};

export default SwitchColor;