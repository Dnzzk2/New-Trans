import { createContext, useEffect, useState } from "react";
import { getInitialColorMode } from "../util/theme";

export const ThemeContext = createContext({
  colorMode: "light",
  setColorMode: () => {},
});

export const ThemeProvider = (props) => {
  const [colorMode, rawSetColorMode] = useState(() => {
    return getInitialColorMode();
  });

  useEffect(() => {
    document.documentElement.className = colorMode;
    window.localStorage.setItem("color-mode", colorMode);
  }, [colorMode]);

  const setColorMode = (value) => {
    rawSetColorMode(value);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {props["children"]}
    </ThemeContext.Provider>
  );
};
