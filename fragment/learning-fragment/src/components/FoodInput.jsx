import Style from "./FoodInput.module.css"
const FoodInput = ({handleOnKeyDown}) =>{
    return <input type="text" className={`${Style.foodInput} my-2`} placeholder="enter the food name"
    onKeyDown={handleOnKeyDown}
    />
};
export default FoodInput;