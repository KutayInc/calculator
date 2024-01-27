function Header(props) {
  const setTheme = props.setTheme;
  const theme = props.theme;
  const logoTheme =
    theme === 1
      ? "text-white "
      : theme === 2
      ? "text-theme2Text "
      : "text-theme3TextYellow ";

  const themeText =
    theme === 1
      ? "text-white "
      : theme === 2
      ? "text-theme2Text "
      : "text-theme3TextYellow ";
  const themeNumbers =
    theme === 1
      ? "text-white "
      : theme === 2
      ? " text-theme2Text "
      : "text-theme3TextYellow ";

  const toggleTheme =
    theme === 1
      ? "bg-theme1Keypadbg "
      : theme === 2
      ? "bg-theme2Keypadbg "
      : "bg-theme3Keypadbg ";

  function themeHandler(index) {
    const theme1 = document.getElementById("theme-1");
    const theme2 = document.getElementById("theme-2");
    const theme3 = document.getElementById("theme-3");
    if (index === 1) {
      theme1.classList.remove("bg-transparent");
      theme1.classList.add("bg-theme1ToggleKeybg");
      theme2.classList.remove("bg-theme2ToggleKeybg");
      theme2.classList.add("bg-transparent");
      theme3.classList.remove("bg-theme3ToggleKeybg");
      theme3.classList.add("bg-transparent");
      setTheme(1);
      console.log(theme);
    } else if (index === 2) {
      theme1.classList.add("bg-transparent");
      theme1.classList.remove("bg-theme1ToggleKeybg");
      theme2.classList.add("bg-theme2ToggleKeybg");
      theme2.classList.remove("bg-transparent");
      theme3.classList.remove("bg-theme3ToggleKeybg");
      theme3.classList.add("bg-transparent");
      setTheme(2);
      console.log(theme);
    } else if (index === 3) {
      theme1.classList.add("bg-transparent");
      theme1.classList.remove("bg-theme1ToggleKeybg");
      theme2.classList.remove("bg-theme2ToggleKeybg");
      theme2.classList.add("bg-transparent");
      theme3.classList.add("bg-theme3ToggleKeybg");
      theme3.classList.remove("bg-transparent");
      setTheme(3);
      console.log(theme);
    }
  }

  return (
    <header className="flex min-h-24 h-1/4 p-5 justify-between items-center">
      <h1 className={logoTheme + "text-2xl md:text-3xl mt-4"}>calc</h1>
      <div className="flex items-end flex-wrap">
        <h3 className={themeText + "pr-5"}>Theme</h3>
        <div
          className={themeNumbers + "font-bold flex flex-col items-center w-24"}
        >
          <div className="flex justify-between w-20 px-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
          <div
            className={
              toggleTheme +
              "px-2 py-1 rounded-xl w-20 min-h-6 flex justify-between"
            }
          >
            <div
              className="min-w-4 w-4 min-h-4 h-4 rounded-full bg-theme1ToggleKeybg cursor-pointer"
              id="theme-1"
              onClick={() => themeHandler(1)}
            ></div>
            <div
              className="min-w-4 w-4 min-h-4 h-4 rounded-full bg-transparent cursor-pointer"
              id="theme-2"
              onClick={() => themeHandler(2)}
            ></div>
            <div
              className="min-w-4 w-4 min-h-4 h-4 rounded-full bg-transparent cursor-pointer"
              onClick={() => themeHandler(3)}
              id="theme-3"
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
