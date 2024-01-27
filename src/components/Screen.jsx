function Screen(props) {
  const theme = props.theme;

  const screenTheme =
    theme === 1
      ? "bg-theme1Screenbg "
      : theme === 2
      ? "bg-theme2Screenbg "
      : "bg-theme3Keypadbg ";

  const screenTextTheme =
    theme === 1
      ? "text-white "
      : theme === 2
      ? "text-theme2Text "
      : "text-theme3TextYellow ";

  return (
    <div className="min-h-16">
      <div
        className={
          screenTheme +
          "mx-5 my-3  h-24 rounded-xl flex justify-end items-center"
        }
      >
        <div
          className={
            screenTextTheme + "text-4xl text-end justify-center pr-5 font-bold"
          }
        >
          {props.screen}
        </div>
      </div>
    </div>
  );
}

export default Screen;
