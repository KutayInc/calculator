import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Screen from "./components/Screen";

function App() {
  const [theme, setTheme] = useState(1);

  const [screen, setScreen] = useState("0");

  const themeHandler =
    theme === 1
      ? "min-h-screen h-full bg-theme1bg w-screen"
      : theme === 2
      ? "min-h-screen h-full bg-theme2bg w-screen"
      : "min-h-screen h-full bg-theme3bg w-screen";

  return (
    <div className={themeHandler + "md:flex items-center justify-center"}>
      <div className="lg:w-4/12 lg:mx-auto">
        <Header setTheme={setTheme} theme={theme} />
        <Screen screen={screen} theme={theme} />
        <Main setScreen={setScreen} screen={screen} theme={theme} />
      </div>
    </div>
  );
}

export default App;
