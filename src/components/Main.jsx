import { useState } from "react";

function Main(props) {
  const screen = props.screen;
  const setScreen = props.setScreen;
  const theme = props.theme;

  const mainTheme =
    theme === 1
      ? "bg-theme1Keypadbg "
      : theme === 2
      ? "bg-theme2Keypadbg "
      : "bg-theme3Keypadbg ";

  const buttonClass =
    theme === 1
      ? "font-bold text-theme1Text bg-theme1ButtonKeybg h-16 text-center rounded-lg text-3xl md:text-4xl button-1"
      : theme === 2
      ? "font-bold text-theme2Text bg-theme2ButtonKeybg h-16 text-center rounded-lg text-3xl md:text-4xl button-2"
      : "font-bold text-theme3TextYellow bg-theme3ButtonKeybg h-16 text-center rounded-lg text-3xl md:text-4xl button-3";

  const delButtonClass =
    theme === 1
      ? "bg-theme1Delbg del-button-1 "
      : theme === 2
      ? "bg-theme2Delbg del-button-2 "
      : "bg-theme3Delbg del-button-3 ";

  const resetButtonClass =
    theme === 1
      ? "bg-theme1ToggleKeybg text-white reset-button-1 "
      : theme === 2
      ? "bg-theme2ToggleKeybg text-white reset-button-2 "
      : "bg-theme3ToggleKeybg text-theme3TextBlue reset-button-3 ";

  const [prevValue, setPrevValue] = useState(0);
  const [operationValue, setOperationValue] = useState("");
  function screenShow(number) {
    if (screen === "0") {
      setScreen(number.toString());
    } else {
      setScreen(screen + number.toString());
    }
  }

  function screenReset() {
    setScreen("0");
  }

  function screenDelete() {
    if (screen.length === 1) {
      setScreen("0");
    } else {
      setScreen(screen.slice(0, -1));
    }
  }

  function screenAdd() {
    setPrevValue(screen);
    setScreen("0");
  }

  function operation() {
    if (operationValue === "+") {
      setScreen(parseFloat(prevValue) + parseFloat(screen));
    } else if (operationValue === "-") {
      setScreen(parseFloat(prevValue) - parseFloat(screen));
    } else if (operationValue === "/") {
      setScreen(parseFloat(prevValue) / parseFloat(screen));
    } else if (operationValue === "x") {
      setScreen(parseFloat(prevValue) * parseFloat(screen));
    }
  }

  function setOperation(opr) {
    if (opr === "+") {
      setOperationValue("+");
      screenAdd();
      console.log(prevValue + operationValue);
    } else if (opr === "-") {
      setOperationValue("-");
      screenAdd();
    } else if (opr === "/") {
      setOperationValue("/");
      screenAdd();
    } else if (opr === "x") {
      setOperationValue("x");
      screenAdd();
    }
  }

  return (
    <div>
      <div
        className={
          mainTheme +
          "mx-5 min-h-48 my-6 rounded-xl grid grid-cols-4 grid-rows-5 gap-4 p-5"
        }
      >
        <button className={buttonClass} onClick={() => screenShow(7)}>
          7
        </button>
        <button className={buttonClass} onClick={() => screenShow(8)}>
          8
        </button>
        <button className={buttonClass} onClick={() => screenShow(9)}>
          9
        </button>
        <button
          className={
            delButtonClass +
            "font-bold text-white h-16 text-center rounded-lg text-xl"
          }
          onClick={screenDelete}
        >
          DEL
        </button>
        <button className={buttonClass} onClick={() => screenShow(4)}>
          4
        </button>
        <button className={buttonClass} onClick={() => screenShow(5)}>
          5
        </button>
        <button className={buttonClass} onClick={() => screenShow(6)}>
          6
        </button>
        <button className={buttonClass} onClick={() => setOperation("+")}>
          +
        </button>
        <button className={buttonClass} onClick={() => screenShow(1)}>
          1
        </button>
        <button className={buttonClass} onClick={() => screenShow(2)}>
          2
        </button>
        <button className={buttonClass} onClick={() => screenShow(3)}>
          3
        </button>
        <button className={buttonClass} onClick={() => setOperation("-")}>
          -
        </button>
        <button className={buttonClass} onClick={() => screenShow(".")}>
          .
        </button>
        <button className={buttonClass} onClick={() => screenShow(0)}>
          0
        </button>
        <button className={buttonClass} onClick={() => setOperation("/")}>
          /
        </button>
        <button className={buttonClass} onClick={() => setOperation("x")}>
          x
        </button>
        <button
          className={
            delButtonClass +
            "font-bold text-white h-16 text-center rounded-lg text-xl col-span-2"
          }
          onClick={() => screenReset()}
        >
          RESET
        </button>
        <button
          className={
            resetButtonClass +
            "font-bold h-16 text-center rounded-lg text-3xl col-span-2"
          }
          onClick={() => operation()}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Main;
