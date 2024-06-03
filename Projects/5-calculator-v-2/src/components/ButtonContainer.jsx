import Button from "./Button";
import Style from "./ButtonContainer.module.css"
const ButtonContiner = ({allButtons,onButtonClicked}) => {
    
  return (
    <div className={Style.buttonContainer}>
        {allButtons.map(button => <Button button={button}
        onButtonClicked={onButtonClicked}
        />)}
      
    </div>
  );
};
export default ButtonContiner;
