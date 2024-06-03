import Button from "./Button";
import Style from "./ButtonContainer.module.css"
const ButtonContiner = ({allButtons}) => {
    
  return (
    <div className={Style.buttonContainer}>
        {allButtons.map(button => <Button button={button}/>)}
      
    </div>
  );
};
export default ButtonContiner;
