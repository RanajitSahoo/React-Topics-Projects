import { useState } from "react";
import Style from "./App.module.css";
import ButtonContiner from "./components/ButtonContainer";
import Display from "./components/Display";

function App() {
  let buttons = [
    "C",
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
    "*",
    0,
    ".",
    "/",
    "=",
  ];
  const [calVal,setCalVal]=useState("");
  const onButtonClicked=(buttonText)=>{
   if(buttonText === "C"){
    setCalVal("")
   }else if(buttonText === "="){
    const result = eval(calVal);
    setCalVal(result);
   }else{
      const newCalVal = calVal + buttonText;
      setCalVal(newCalVal);
   }
  };
  return (
    <div className={Style.calculator}>
      <Display displayValue={calVal} />
      <ButtonContiner allButtons={buttons} onButtonClicked={onButtonClicked} />
    </div>
  );
}

export default App;
