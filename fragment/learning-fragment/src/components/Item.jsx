import Style from "./Item.module.css";

const Item = (props) => {
  let { foodItem,bought,handleBuyButton } = props;

  

  return (
    <li className={`list-group-item ${Style["item"]} ${Style["item-span"]} ${bought && 'active'}`}>
      {foodItem}
      <button
        className={`${Style.button} btn btn-info`}
        onClick={ handleBuyButton}
      >
        buy
      </button>
    </li>
  );
};
export default Item;
