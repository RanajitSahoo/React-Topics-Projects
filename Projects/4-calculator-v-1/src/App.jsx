import Style from "./App.module.css";
import ButtonContiner from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  let buttons = [
    "c",
    1,
    2,
    3,
    "+",
    4,
    5,
    6,
    "-",
    7,
    8,
    9,
    "x",
    0,
    ".",
    "/",
    "=",
  ];
  return (
    <div className={Style.calculator}>
      <Display />
      <ButtonContiner allButtons={buttons} />
    </div>
  );
}

export default App;
