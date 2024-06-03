import Style from "./Button.module.css"
const Button = (props) =>{
    return <button className={Style.button} onClick={() =>props.onButtonClicked(props.button)}>{props.button} </button>;
}
export default Button;