import Style from "./Display.module.css";
const Display = ({ displayValue }) => {
  return <input className={Style.display} type="text" value={displayValue} />;
};

export default Display;
