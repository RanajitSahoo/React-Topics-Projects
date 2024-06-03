import { useState } from "react";
import Item from "./Item";

const FoodItems = (props) => {
  let [activeItems,setActiveItems] = useState([]);

  const handleBuyButton = (event, item) => {
   
      let newItems=[...activeItems,item];
      setActiveItems(newItems);
    
    
  };
    
  return (
    <ul className="list-group">
      {props.items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => handleBuyButton(event, item)}
        />
      ))}
    </ul>
  );
};
export default FoodItems;
